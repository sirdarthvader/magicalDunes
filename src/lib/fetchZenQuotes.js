import { zenQuoteUrl } from "./url";
import { Octokit } from "@octokit/core";
// npm install @octokit/core

export const getQuote = async () => {
  let data = "";
  fetch(zenQuoteUrl)
    .then((res) => {
      console.log(res.body);
    })
    .catch((err) => {
      console.error(err);
    });
  console.log(data);
  // return data;

  const octokit = new Octokit({ auth: `personal-access-token123` });

  const response = await octokit.request("GET /orgs/:org/repos", {
    org: "octokit",
    type: "private",
  });
};
