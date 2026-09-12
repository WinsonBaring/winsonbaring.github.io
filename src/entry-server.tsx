import { renderToString } from "react-dom/server";
import App, { routes, pageMeta } from "./App";
export { routes, pageMeta };
export function render(path: string) {
  return renderToString(<App initialPath={path} />);
}
