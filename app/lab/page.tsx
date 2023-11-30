import Link from "next/link";
import Image from "next/image";
import Automations from '@/public/lab/1.png'
import AiPrompts from '@/public/lab/2.png'
import CodeSnippets from '@/public/lab/3.png'

export default function Lab() {

  return (
    <div className="flex-col justify-center">
      <h1 className="mb-12 text-5xl gradient-span font-bold text-center">Moderndev Lab</h1>
      <div className="flex flex-wrap gap-12">
        <Link href="/snippets">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image src={CodeSnippets} alt="code snippets" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Code Snippets</h2>
              <p>Pick code snippets for your project</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Check</button>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/ai-prompts">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image src={AiPrompts} alt="Automations" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">AI Prompts</h2>
              <p>Check AI props developed by moderndev.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Check</button>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/automations">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image src={Automations} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Automations</h2>
              <p>Try some free automation schemas.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Check</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
