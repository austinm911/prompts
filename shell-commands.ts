// This is how you run shell commands in Bun

import { $ } from 'bun'

async function runShellCommands() {
	// Simple echo command
	await $`echo "Hello, World!"`

	// Safer way to list files
	try {
		// Use current directory listing that works across platforms
		const output = await $`pwd && ls`.text()
		console.log('Current directory contents:', output)
	} catch (error) {
		console.error('Directory listing failed:', error)
	}

	// Alternative file listing methods
	try {
		// Using Node.js-style file system (more reliable)
		const { readdirSync } = await import('node:fs')
		const files = readdirSync('.')
		console.log('Files in current directory:', files)
	} catch (error) {
		console.error('File system listing failed:', error)
	}

	// Other safe shell commands
	await $`echo "Current working directory: $(pwd)"`
}

// Execute the function
runShellCommands().catch(console.error)
