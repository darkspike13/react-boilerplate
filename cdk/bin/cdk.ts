#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { SsrStack } from "../lib/srr-stack";

const env = { region: "us-east-1" };
const app = new cdk.App();
new SsrStack(app, "SSRAppStack", { env });
