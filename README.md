# ospec test

This project was created following instructions at https://mithril.js.org/testing.html#setup && https://mithril.zulipchat.com/#narrow/stream/326810-help/topic/testing.20with.20ospec/near/288691124

Specifically:

```sh
npm install --save-dev ospec mithril-query jsdom
```

…and then adding the following to the `package.json` `scripts` field:

```json
"test:unit":"ospec"
```

I then wrote a dud test file and execute the script via:

```sh
npm run test:unit
```

Executes fine!
