import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdkpipelines-test-pipeline-stack';

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: '236719679879', region: 'eu-west-3' },
});

app.synth();