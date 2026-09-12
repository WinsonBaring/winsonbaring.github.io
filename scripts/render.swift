import AppKit
import WebKit
let args=CommandLine.arguments
let url=URL(string:args[1])!
let width=Double(args[2])!, height=Double(args[3])!
let output=args[4], dark=args.count>5 && args[5]=="dark"
let app=NSApplication.shared
app.setActivationPolicy(.accessory)
let window=NSWindow(contentRect:NSRect(x:0,y:0,width:width,height:height),styleMask:[.borderless],backing:.buffered,defer:false)
let configuration=WKWebViewConfiguration()
configuration.userContentController.addUserScript(WKUserScript(source:"window.__errors=[];addEventListener('error',e=>window.__errors.push(e.message));addEventListener('unhandledrejection',e=>window.__errors.push(String(e.reason)));",injectionTime:.atDocumentStart,forMainFrameOnly:true))
let view=WKWebView(frame:window.contentView!.bounds,configuration:configuration)
window.contentView=view
class Capture:NSObject,WKNavigationDelegate {
 func webView(_ webView:WKWebView,didFinish navigation:WKNavigation!){
  DispatchQueue.main.asyncAfter(deadline:.now()+1){
   let action=dark ? "document.querySelector('[aria-label=\"Switch to dark theme\"]')?.click()" : "document.querySelector('[aria-label=\"Switch to light theme\"]')?.click()"
   webView.evaluateJavaScript(action){_,error in
    if let error=error{print(error)}
    DispatchQueue.main.asyncAfter(deadline:.now()+1){self.capture(webView)}
   }
  }
 }
 func capture(_ webView:WKWebView){
  webView.evaluateJavaScript("JSON.stringify({title:document.title,width:innerWidth,dark:document.documentElement.classList.contains('dark'),overflow:document.documentElement.scrollWidth>innerWidth,errors:window.__errors,images:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),hero:document.querySelector('.hero')?.getBoundingClientRect().height})"){value,error in
   print(value ?? "No metrics")
   if let error=error{print(error)}
   let config=WKSnapshotConfiguration();config.rect=webView.bounds
   webView.takeSnapshot(with:config){image,error in
    guard let image=image,let tiff=image.tiffRepresentation,let bitmap=NSBitmapImageRep(data:tiff),let png=bitmap.representation(using:.png,properties:[:]) else{print(error as Any);exit(1)}
    do{try png.write(to:URL(fileURLWithPath:output))}catch{print(error);exit(1)}
    print("Rendered \(output)");NSApplication.shared.terminate(nil)
   }
  }
 }
 func webView(_ webView:WKWebView,didFailProvisionalNavigation navigation:WKNavigation!,withError error:Error){print(error);exit(1)}
}
let capture=Capture();view.navigationDelegate=capture
window.orderFront(nil);view.load(URLRequest(url:url))
DispatchQueue.main.asyncAfter(deadline:.now()+30){print("Render timeout");exit(1)}
app.run()
