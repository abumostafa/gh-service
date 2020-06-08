const app = require("../../../src/server");
const request = require("supertest");

jest.mock("node-fetch", function () {
  return async function () {
    return {
      json() {
        return {
          items: [
            {
              id: 269336148,
              node_id: "MDEwOlJlcG9zaXRvcnkyNjkzMzYxNDg=",
              name: "Docker-OSX",
              full_name: "sickcodes/Docker-OSX",
              private: false,
              html_url: "https://github.com/sickcodes/Docker-OSX",
              description: "Mac in Docker! Run near native OSX-KVM in Docker! X11 Forwarding!",
              fork: false,
              url: "https://api.github.com/repos/sickcodes/Docker-OSX",
              forks_url: "https://api.github.com/repos/sickcodes/Docker-OSX/forks",
              keys_url: "https://api.github.com/repos/sickcodes/Docker-OSX/keys{/key_id}",
              collaborators_url: "https://api.github.com/repos/sickcodes/Docker-OSX/collaborators{/collaborator}",
              teams_url: "https://api.github.com/repos/sickcodes/Docker-OSX/teams",
              hooks_url: "https://api.github.com/repos/sickcodes/Docker-OSX/hooks",
              issue_events_url: "https://api.github.com/repos/sickcodes/Docker-OSX/issues/events{/number}",
              events_url: "https://api.github.com/repos/sickcodes/Docker-OSX/events",
              assignees_url: "https://api.github.com/repos/sickcodes/Docker-OSX/assignees{/user}",
              branches_url: "https://api.github.com/repos/sickcodes/Docker-OSX/branches{/branch}",
              tags_url: "https://api.github.com/repos/sickcodes/Docker-OSX/tags",
              blobs_url: "https://api.github.com/repos/sickcodes/Docker-OSX/git/blobs{/sha}",
              git_tags_url: "https://api.github.com/repos/sickcodes/Docker-OSX/git/tags{/sha}",
              git_refs_url: "https://api.github.com/repos/sickcodes/Docker-OSX/git/refs{/sha}",
              trees_url: "https://api.github.com/repos/sickcodes/Docker-OSX/git/trees{/sha}",
              statuses_url: "https://api.github.com/repos/sickcodes/Docker-OSX/statuses/{sha}",
              languages_url: "https://api.github.com/repos/sickcodes/Docker-OSX/languages",
              stargazers_url: "https://api.github.com/repos/sickcodes/Docker-OSX/stargazers",
              contributors_url: "https://api.github.com/repos/sickcodes/Docker-OSX/contributors",
              subscribers_url: "https://api.github.com/repos/sickcodes/Docker-OSX/subscribers",
              subscription_url: "https://api.github.com/repos/sickcodes/Docker-OSX/subscription",
              commits_url: "https://api.github.com/repos/sickcodes/Docker-OSX/commits{/sha}",
              git_commits_url: "https://api.github.com/repos/sickcodes/Docker-OSX/git/commits{/sha}",
              comments_url: "https://api.github.com/repos/sickcodes/Docker-OSX/comments{/number}",
              issue_comment_url: "https://api.github.com/repos/sickcodes/Docker-OSX/issues/comments{/number}",
              contents_url: "https://api.github.com/repos/sickcodes/Docker-OSX/contents/{+path}",
              compare_url: "https://api.github.com/repos/sickcodes/Docker-OSX/compare/{base}...{head}",
              merges_url: "https://api.github.com/repos/sickcodes/Docker-OSX/merges",
              archive_url: "https://api.github.com/repos/sickcodes/Docker-OSX/{archive_format}{/ref}",
              downloads_url: "https://api.github.com/repos/sickcodes/Docker-OSX/downloads",
              issues_url: "https://api.github.com/repos/sickcodes/Docker-OSX/issues{/number}",
              pulls_url: "https://api.github.com/repos/sickcodes/Docker-OSX/pulls{/number}",
              milestones_url: "https://api.github.com/repos/sickcodes/Docker-OSX/milestones{/number}",
              notifications_url:
                "https://api.github.com/repos/sickcodes/Docker-OSX/notifications{?since,all,participating}",
              labels_url: "https://api.github.com/repos/sickcodes/Docker-OSX/labels{/name}",
              releases_url: "https://api.github.com/repos/sickcodes/Docker-OSX/releases{/id}",
              deployments_url: "https://api.github.com/repos/sickcodes/Docker-OSX/deployments",
              created_at: "2020-06-04T11:01:37Z",
              updated_at: "2020-06-07T18:47:55Z",
              pushed_at: "2020-06-07T01:14:56Z",
              git_url: "git://github.com/sickcodes/Docker-OSX.git",
              ssh_url: "git@github.com:sickcodes/Docker-OSX.git",
              clone_url: "https://github.com/sickcodes/Docker-OSX.git",
              svn_url: "https://github.com/sickcodes/Docker-OSX",
              homepage: null,
              size: 406,
              stargazers_count: 3953,
              watchers_count: 3953,
              language: "Dockerfile",
              has_issues: true,
              has_projects: true,
              has_downloads: true,
              has_wiki: true,
              has_pages: false,
              forks_count: 175,
              mirror_url: null,
              archived: false,
              disabled: false,
              open_issues_count: 7,
              forks: 175,
              open_issues: 7,
              watchers: 3953,
              default_branch: "master",
              score: 1
            }
          ]
        };
      }
    };
  };
});

describe("Repo Controller", function () {
  it("should return home ok", async function () {
    const res = await request(app).get("/");
    expect(res.status).toEqual(200);
  });

  it("should return 404", async function () {
    const res = await request(app).get("/v1/repo/search");
    expect(res.status).toEqual(404);
    expect(res.body).toEqual({ error: "Page Not Found" });
  });

  it("should return v1 ok", async function () {
    const res = await request(app).get("/v1");
    expect(res.status).toEqual(200);
  });

  it("should fetch default list", async function () {
    const response = {
      data: [
        {
          created_at: "2020-06-04T11:01:37Z",
          language: "Dockerfile",
          name: "Docker-OSX",
          stars: 3953,
          url: "https://github.com/sickcodes/Docker-OSX"
        }
      ]
    };
    const res = await request(app).get("/v1/repo/popular");
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(response);
  });
});
