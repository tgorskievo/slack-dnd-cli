# About
This is CLI tool to enable/disable your Slack.

# How to configure?
1. Generate `SLACK_TOKEN` by creating a new app 
https://api.slack.com/apps
2. Open the "Oauth & Permissions"
3. Add a new scope that will allow you to control DND
- scroll down to `User Token Scopes`
- add scope `dnd:write`
4. Install `slack-dnd-cli` with `npm`
- `npm i -g slack-dnd-cli`

# How to use?
Add `SLACK_TOKEN` to your `env` or add this environment variable to the command e.g.:
`SLACK=TOKEN=your-slack-token slack-dnd-cli --dnd start --time 25`

# Example commands:
- `slack-dnd-cli --dnd start --time 25` starts DND mode for 25 minutes
- `slack-dnd-cli --dnd stop` ends DND mode