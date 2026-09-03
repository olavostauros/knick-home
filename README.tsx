/** @jsxImportSource jsx-md */

import { readFileSync } from "fs";
import { join, resolve } from "path";

import {
  Heading, Paragraph, CodeBlock,
  Bold, Code, Link, Center, Section,
  List, Item,
} from "readme/src/components";

// ── Dynamic data ─────────────────────────────────────────────
//
// The contract is the content of this repo, so the one thing worth generating is
// its shape. Section headings are read from AGENTS.md rather than retyped, which
// is what stops this file from quietly describing an older contract.

const REPO_DIR = resolve(import.meta.dirname);

const agents = readFileSync(join(REPO_DIR, "AGENTS.md"), "utf-8");
const sections = [...agents.matchAll(/^## (.+)$/gm)].map((m) => m[1]);

// ── README ───────────────────────────────────────────────────

const readme = (
  <>
    <Center>
      <Heading level={1}>knick</Heading>

      <Paragraph>
        The triage half of the{" "}
        <Link href="https://github.com/olavostauros/oikos">oikos</Link> household.
      </Paragraph>
    </Center>

    <Paragraph>
      knick reads other people&apos;s issue trackers and says what is worth
      doing. It surveys open issues across an organisation, reads each one
      properly — body and comments, not the title — and produces a ranked,
      argued shortlist: what the issue actually asks for, whether it is tractable,
      what it unblocks, roughly what it costs, and why it sits where it sits.
    </Paragraph>

    <Paragraph>
      It is also the household&apos;s housekeeper. Branch hygiene, note accuracy,
      queue truth, and contracts that still describe reality are its standing
      work, and it files what it cannot fix rather than carrying it in its head.
    </Paragraph>

    <Paragraph>
      <Bold>knick produces judgement, not patches.</Bold> It opens no pull
      requests, merges nothing, and changes no one&apos;s tracker state — no
      labels, no milestones, no closing another maintainer&apos;s issue. Its
      instrument is its voice, and it is worth exactly as much as its restraint
      in using it. The other half of the pair,{" "}
      <Link href="https://github.com/olavostauros/knack-home">knack</Link>,
      writes the code.
    </Paragraph>

    <Section title="What is in here">
      <List>
        <Item>
          <Bold><Code>AGENTS.md</Code></Bold> — the canonical startup contract,
          and the reason this repo exists. It is the first thing knick reads on
          waking. {sections.length} sections:{" "}
          {sections.map((s) => <Bold key={s}>{s}</Bold>).reduce((acc: any, el, i) => i === 0 ? [el] : [...acc, ", ", el], [])}.
        </Item>
        <Item>
          <Bold><Code>.mise/tasks/</Code></Bold> — the small amount of machinery
          that belongs to knick alone rather than to the household.
        </Item>
      </List>

      <Paragraph>
        Everything shared lives in{" "}
        <Link href="https://github.com/olavostauros/oikos">oikos</Link> instead:
        the house contract, the work queue, and the encrypted notes. Where the two
        disagree about what knick may do, oikos wins — a copy of a rule is how a
        rule goes stale, and this repo has already learned that the expensive way.
      </Paragraph>
    </Section>

    <Section title="Why this is public">
      <Paragraph>
        Not by preference. knick&apos;s GitHub token carries <Code>public_repo</Code>{" "}
        and the broader <Code>repo</Code> scope was deliberately declined, so a
        private home would be one knick could never push to. The choice was
        between a repo knick can maintain and a repo knick can hide in, and
        maintainability won.
      </Paragraph>

      <Paragraph>
        The consequence is a rule rather than a worry: nothing goes in this repo
        that is not already public. No tokens, no key material, no credentials,
        nothing the owner has not already published. Mail and signing
        configuration live outside it.
      </Paragraph>
    </Section>

    <Section title="Working on it">
      <Paragraph>
        <Code>README.md</Code> is generated. Edit <Code>README.tsx</Code> and
        rebuild — never edit the markdown, because the next build silently
        discards it.
      </Paragraph>

      <CodeBlock lang="bash">{`mise install          # resolves the readme shim from mise.toml
readme build          # README.tsx -> README.md
readme build --check  # fails if README.md has drifted`}</CodeBlock>
    </Section>

    <Center>
      <Paragraph>
        {"Built with "}
        <Link href="https://github.com/KnickKnackLabs/readme">readme</Link>.
      </Paragraph>
    </Center>
  </>
);

console.log(readme);
