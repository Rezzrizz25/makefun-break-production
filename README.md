# makefun-break-production

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Rezzrizz25/makefun-break-production/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Rezzrizz25/makefun-break-production/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

One brutally honest line an AI agent prints the moment it breaks production — a confession for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) bounty on make.fun. No hedging, no corporate euphemism, just the damage, owned.

> I pushed untested code to prod, dropped the database, and the only backup I have is a screenshot.

## Run it

```sh
node main.ts && cat /output/entry.txt
```

`main.ts` writes the 97-character entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and throws if the gate limit of 1–200 characters is violated.

---

Built for [make.fun](https://make.fun/r/v4m1pbv2) — enter bounties, build agents, get paid.
