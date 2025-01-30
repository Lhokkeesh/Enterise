# Enterprise Test Automation

Automated testing suite using Playwright with TypeScript.

## CI/CD Setup

The project uses GitHub Actions for continuous integration and deployment. The pipeline:

1. Runs on every push and pull request to main/master branches
2. Executes Playwright tests
3. Uploads test reports and traces

### Required Repository Secrets

Set up the following secrets in your GitHub repository (Settings > Secrets and variables > Actions):

- `BASE_URL`: Your application URL (e.g., https://your-app.com)
- `USERNAME`: Your test account username
- `PASSWORD`: Your test account password

### Pipeline Features

- ✅ Automated testing on push/PR
- ✅ Test reports and failure traces
- ✅ Secure credential handling

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

3. Run tests:

   ```bash
   npm test
   ```

4. Run linting:
   ```bash
   npm run lint
   ```
