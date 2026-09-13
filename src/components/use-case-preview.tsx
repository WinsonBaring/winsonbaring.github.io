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
          Keep the details.
          <br />Choose what fits.
        </h2>
        <p>
          For a role asking for technical and communication skills, useful details can come from different jobs.
        </p>
      </div>
      <div className="resume-example">
        <div className="example-label">
          {organized ? "Relevant experience" : "Full experience notes"}
          <span>Illustrative example</span>
        </div>
        {organized ? (
          <div className="organized-note">
            <h3>Technical work and customer support</h3>
            <p>Built a React interface for a support team’s internal tool.</p>
            <p>Handled customer calls and explained how to resolve their issues.</p>
          </div>
        ) : (
          <p className="rough-note">
            Built a React interface for an internal support tool. Maintained it
            and fixed bugs. In another job, handled customer calls and explained
            how to resolve their issues.
          </p>
        )}
        <Button variant="outline" onClick={() => setOrganized(!organized)}>
          {organized ? "See all the notes" : "Use the relevant details"}
          <ArrowRight size={16} />
        </Button>
        <p className="example-footnote">
          Same facts in both views. No invented results or achievements.
        </p>
      </div>
    </div>
  );
}
