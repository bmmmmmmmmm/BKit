#!/usr/bin/env node

import { setPath, getPath, addRB, listRB } from "../rbTool"
import { countWords } from "../countWords"

export const commands = {
  '@@SETRBPATH@@': setPath,
  '@@GETRBPATH@@': getPath,

  'rb': addRB,
  'rbl': listRB,
  'le': countWords
} as const
type Commands = keyof typeof commands
const commandsDesc: Partial<Record<Commands, string>> = {
  rb: '',
  rbl: '',
  le: ''
}


const main = async () => {
  const whichCommand = process.argv[2] as Commands
  const USER_INPUT = process.argv.slice(3).join(' ') || '';
  try {
    await commands[whichCommand](USER_INPUT)
  } catch (err) {
    console.log(err)
    console.log('wrong command')
    console.log('commandList\n', commandsDesc)
  }
}

main()