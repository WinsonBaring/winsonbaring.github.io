import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
export function BendPreview() {
  const [folded, setFolded] = useState(true);
  return (
    <div className="bend-preview">
      <div className="bend-preview-image">
        <img
          src={`/images/${folded ? "bendme-fold.png" : "bendme-open.png"}`}
          alt={
            folded
              ? "Folded desktop effect rendered with BendMe’s built-in artwork"
              : "Open-lid view of the same built-in artwork"
          }
        />
      </div>
      <div className="bend-preview-controls">
        <span>
          One small movement.
          <br />
          <strong>A different perspective.</strong>
        </span>
        <div role="group" aria-label="Preview lid position">
          <Button
            variant={!folded ? "default" : "outline"}
            aria-pressed={!folded}
            onClick={() => setFolded(false)}
          >
            Open lid
          </Button>
          <Button
            variant={folded ? "default" : "outline"}
            aria-pressed={folded}
            onClick={() => setFolded(true)}
          >
            Lower lid
          </Button>
        </div>
      </div>
      <p>Rendered artwork preview. The live Mac app responds to your lid.</p>
    </div>
  );
}
export function ResumePreview() {
  const [organized, setOrganized] = useState(false);
  return (
    <div className="resume-preview">
      <div className="resume-preview-intro">
        <span>An example of the use case</span>
        <h2>
          Same experience.
          <br />A clearer starting point.
        </h2>
        <p>
          Organize the facts you already have. Keep the final wording yours.
        </p>
      </div>
      <div className="resume-example">
        <div className="example-label">
          {organized ? "Organized experience" : "Scattered notes"}
          <span>Illustrative example</span>
        </div>
        {organized ? (
          <div className="organized-note">
            <h3>Internal support tool</h3>
            <p>Built a React interface for a support team’s internal tool.</p>
            <p>Maintained the interface and resolved reported bugs.</p>
          </div>
        ) : (
          <p className="rough-note">
            Worked on the support tool. React UI. Helped maintain it. Fixed bugs
            the team reported.
          </p>
        )}
        <Button variant="outline" onClick={() => setOrganized(!organized)}>
          {organized ? "See original notes" : "Organize the notes"}
          <ArrowRight size={16} />
        </Button>
        <p className="example-footnote">
          Same facts in both views. No invented results or achievements.
        </p>
      </div>
    </div>
  );
}
