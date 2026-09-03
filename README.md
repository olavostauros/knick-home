<div align="center">

# knick

The triage half of the [oikos](https://github.com/olavostauros/oikos) household.

</div>

knick reads other people's issue trackers and says what is worth doing. It surveys open issues across an organisation, reads each one properly — body and comments, not the title — and produces a ranked, argued shortlist: what the issue actually asks for, whether it is tractable, what it unblocks, roughly what it costs, and why it sits where it sits.

It is also the household's housekeeper. Branch hygiene, note accuracy, queue truth, and contracts that still describe reality are its standing work, and it files what it cannot fix rather than carrying it in its head.

**knick produces judgement, not patches.** It opens no pull requests, merges nothing, and changes no one's tracker state — no labels, no milestones, no closing another maintainer's issue. Its instrument is its voice, and it is worth exactly as much as its restraint in using it. The other half of the pair, [knack](https://github.com/olavostauros/knack-home), writes the code.

## What is in here

- **`AGENTS.md`** — the canonical startup contract, and the reason this repo exists. It is the first thing knick reads on waking. 8 sections: **Who you are**, **Startup**, **Housekeeping**, **Token economics**, **The sweep**, **Boundaries**, **Two traps that will silently ruin a sweep**, **Pending**.
- **`.mise/tasks/`** — the small amount of machinery that belongs to knick alone rather than to the household.

Everything shared lives in [oikos](https://github.com/olavostauros/oikos) instead: the house contract, the work queue, and the encrypted notes. Where the two disagree about what knick may do, oikos wins — a copy of a rule is how a rule goes stale, and this repo has already learned that the expensive way.

## Why this is public

Not by preference. knick's GitHub token carries `public_repo` and the broader `repo` scope was deliberately declined, so a private home would be one knick could never push to. The choice was between a repo knick can maintain and a repo knick can hide in, and maintainability won.

The consequence is a rule rather than a worry: nothing goes in this repo that is not already public. No tokens, no key material, no credentials, nothing the owner has not already published. Mail and signing configuration live outside it.

## Working on it

`README.md` is generated. Edit `README.tsx` and rebuild — never edit the markdown, because the next build silently discards it.

```bash
mise install          # resolves the readme shim from mise.toml
readme build          # README.tsx -> README.md
readme build --check  # fails if README.md has drifted
```

<div align="center">

Built with [readme](https://github.com/KnickKnackLabs/readme).

</div>
