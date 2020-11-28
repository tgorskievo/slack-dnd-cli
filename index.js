#!/usr/bin/env node

const Slack = require('slack-node');
const argv = require('minimist')(process.argv.slice(2));
const token = process.env.SLACK_TOKEN

if (!token) throw new Error("SLACK_TOKEN environment variable is not set!")

const slack = new Slack(token);

switch (argv.dnd) {
    case 'start':
        const timeDuration = argv.time
        if (!timeDuration || !Number.isInteger(timeDuration)) return console.warn('"--time" argument must be specified for the "start" command. \n It must be integer!')

        return slack.api(
            'dnd.setSnooze', { token, num_minutes: timeDuration },
            () => console.log('Successfully started DND mode!')
        )
    case 'stop':
        return slack.api(
            'dnd.endSnooze', { token, num_minutes: argv.time },
            () => console.log('Successfully ended DND mode!')
        )
    default:
        console.warn('Unsupported argument. Example command:\n "slack --dnd start --time 30"\n "slack --dnd stop"')
}