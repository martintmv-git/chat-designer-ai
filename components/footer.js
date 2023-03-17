import Dropzone from "components/dropzone";
import {
  Code as CodeIcon,
  Download as DownloadIcon,
  Info as InfoIcon,
  XCircle as StartOverIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer({ events, startOver, handleImageDropped }) {
  return (
    <footer className="w-full my-8">
      <div className="text-center">
        {events.length > 1 && (
          <button className="lil-button" onClick={startOver}>
            <StartOverIcon className="icon" />
            Start over
          </button>
        )}

        <Dropzone onImageDropped={handleImageDropped} />

        {events.length > 2 && (
          <Link href={events.findLast((ev) => ev.image).image}>
            <a className="lil-button" target="_blank" rel="noopener noreferrer">
              <DownloadIcon className="icon" />
              Download image
            </a>
          </Link>
        )}
      </div>

      <div className="text-center lil-text mt-8">
        <Link href="https://designer-ai.vercel.app">
          <a>Back to Designer AI</a>
        </Link> 
      </div>

      <div className="text-center lil-text mt-8">
        Powered by{" "}
        <Link href="https://huggingface.co/spaces/timbrooks/instruct-pix2pix">
          <a target="_blank">instruct-pix2pix</a>
        </Link>
        ,{" "}
        <Link href="https://replicate.com/">
          <a target="_blank">Replicate</a>
        </Link>
        ,{" "}
        <Link href="https://vercel.com">
          <a target="_blank">Vercel</a>
        </Link>
      </div>

      <div className="text-center lil-text mt-8">
      Created by{" "}
        <Link href="https://martintomov.com">
          <a target="_blank">@martintmv</a>
        </Link>
      </div>
    </footer>
  );
}
