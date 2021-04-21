window.BENCHMARK_DATA = {
  "lastUpdate": 1619002246985,
  "repoUrl": "https://github.com/PowerOlive/hyper-1",
  "entries": {
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/PowerOlive/hyper-1/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611409723222,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 44899,
            "range": "± 3749",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/PowerOlive/hyper-1/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611714257913,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47909,
            "range": "± 2074",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/PowerOlive/hyper-1/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611888669851,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 49595,
            "range": "± 5867",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/PowerOlive/hyper-1/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612303114176,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 66286,
            "range": "± 14365",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/PowerOlive/hyper-1/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612332826293,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 47864,
            "range": "± 2139",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/PowerOlive/hyper-1/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612646025837,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 62278,
            "range": "± 8775",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/PowerOlive/hyper-1/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612939059903,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 59024,
            "range": "± 8741",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/PowerOlive/hyper-1/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613701804730,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 61268,
            "range": "± 16651",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/PowerOlive/hyper-1/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613785981723,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 68056,
            "range": "± 24904",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/PowerOlive/hyper-1/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614091273783,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 60881,
            "range": "± 13400",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/PowerOlive/hyper-1/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614422007316,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58874,
            "range": "± 11511",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/PowerOlive/hyper-1/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614945688807,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 60348,
            "range": "± 9590",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615274922015,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 70425,
            "range": "± 36014",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/PowerOlive/hyper-1/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615444064825,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 53686,
            "range": "± 8429",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/PowerOlive/hyper-1/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615882664541,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 60741,
            "range": "± 33395",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616220295095,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 60997,
            "range": "± 16525",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/PowerOlive/hyper-1/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616498642959,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 67239,
            "range": "± 8886",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/PowerOlive/hyper-1/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616743008119,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56773,
            "range": "± 10600",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/PowerOlive/hyper-1/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616824264983,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 55208,
            "range": "± 8643",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616828216280,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 58097,
            "range": "± 4732",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/PowerOlive/hyper-1/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617769480657,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 61097,
            "range": "± 11755",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2fdb7b6a2963cea7577df05ddc41c56fee7246",
          "message": "chore(ffi): fix compile errors and warnings (#2492)\n\nAs I understand it, \"cargo rustc\" in gen_header.sh generates a ton of\r\nerrors, but still manages to generate an object that can be used by\r\ncbindgen to generate hyper.h.\r\n\r\nHowever, I tried to make a separate change to add more fields to\r\nhyper.h, and learned that \"cargo rustc\" stops if it reaches 50 errors,\r\nwhich I reached. I was able to buy some headroom and fix a number of\r\nthe compilation errors by adding imports to the fake Cargo.toml we\r\ngenerate in gen_header.sh.\r\n\r\nI wasn't sure how to resolve imports like \"crate::Result\" which appear\r\nto reference the top-level src/error.rs, and print an error when they\r\nare compiled in gen_header.sh. But I only need to buy headroom under\r\nthe 50 error count for now, which I was able to do by adding the\r\nimports.\r\n\r\nIt is possible that someone more familiar with Rust than me could look\r\nat this and know what to change to get the total number of errors to\r\nzero.",
          "timestamp": "2021-04-07T16:12:02-07:00",
          "tree_id": "c86a0c709d655d6d25be94e3fbb6727ece6c8c72",
          "url": "https://github.com/PowerOlive/hyper-1/commit/ed2fdb7b6a2963cea7577df05ddc41c56fee7246"
        },
        "date": 1617856103147,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 70889,
            "range": "± 20194",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123095+nox@users.noreply.github.com",
            "name": "Anthony Ramine",
            "username": "nox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11345394d968d4817e1a0ee2550228ac0ae7ce74",
          "message": "feat(client): add option to allow misplaced spaces in HTTP/1 responses (#2506)",
          "timestamp": "2021-04-20T14:17:48-07:00",
          "tree_id": "3b29f8a6165231bdbe3449acf1c70aeb16bc9153",
          "url": "https://github.com/PowerOlive/hyper-1/commit/11345394d968d4817e1a0ee2550228ac0ae7ce74"
        },
        "date": 1618959619874,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 56933,
            "range": "± 4835",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "117cc492a62c4051c75e7eec0f624b30db8a20e5",
          "message": "chore(ci): quiet the warnings when verifying the generated header file (#2507)",
          "timestamp": "2021-04-20T17:23:10-07:00",
          "tree_id": "77b730b8de4c7597554f528b8cebaf09aabd0796",
          "url": "https://github.com/PowerOlive/hyper-1/commit/117cc492a62c4051c75e7eec0f624b30db8a20e5"
        },
        "date": 1619002242632,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 55260,
            "range": "± 2770",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/PowerOlive/hyper-1/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611411161279,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 70141,
            "range": "± 8181",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6653915,
            "range": "± 467740",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29799,
            "range": "± 3501",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 191236,
            "range": "± 28951",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52759071,
            "range": "± 1657438",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47691623,
            "range": "± 3278922",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 51127566,
            "range": "± 1968658",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3427828,
            "range": "± 285271",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33555,
            "range": "± 3044",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47841,
            "range": "± 7331",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 156166,
            "range": "± 12844",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8226231,
            "range": "± 5283686",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7872639,
            "range": "± 10057957",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11449366,
            "range": "± 5505073",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53385282,
            "range": "± 5375514",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66416235,
            "range": "± 13190761",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5513216,
            "range": "± 1114185",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 51621,
            "range": "± 9889",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 106088,
            "range": "± 17433",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/PowerOlive/hyper-1/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611713542373,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76883,
            "range": "± 6145",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6977809,
            "range": "± 423005",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32245,
            "range": "± 1954",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 219544,
            "range": "± 10690",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52804917,
            "range": "± 1574596",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49365498,
            "range": "± 2056024",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52704365,
            "range": "± 1157801",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3745571,
            "range": "± 400800",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35486,
            "range": "± 2212",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53251,
            "range": "± 4609",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 168426,
            "range": "± 8928",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8350337,
            "range": "± 9179008",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8504172,
            "range": "± 9391670",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8277957,
            "range": "± 9515001",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56937593,
            "range": "± 4288827",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 71827994,
            "range": "± 12839143",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6167913,
            "range": "± 814708",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60062,
            "range": "± 3683",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 114775,
            "range": "± 8869",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/PowerOlive/hyper-1/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611888089108,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 70052,
            "range": "± 1552",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6259022,
            "range": "± 224791",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30140,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 216245,
            "range": "± 6773",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51189128,
            "range": "± 1707356",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 46389568,
            "range": "± 920349",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50412486,
            "range": "± 672126",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3225598,
            "range": "± 64871",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 34095,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 47834,
            "range": "± 764",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 149590,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7736209,
            "range": "± 8662462",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7833356,
            "range": "± 8838745",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7533168,
            "range": "± 8939131",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 51873533,
            "range": "± 3732032",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 63489339,
            "range": "± 11833180",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5426836,
            "range": "± 501284",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 53759,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 103961,
            "range": "± 1955",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/PowerOlive/hyper-1/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612303032949,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 136787,
            "range": "± 17189",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7282783,
            "range": "± 1631740",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 50474,
            "range": "± 6740",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 305474,
            "range": "± 32316",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 54340548,
            "range": "± 3156299",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 59296302,
            "range": "± 4578691",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 62474237,
            "range": "± 4371007",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4110788,
            "range": "± 779032",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 59909,
            "range": "± 7701",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 84102,
            "range": "± 10472",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 215626,
            "range": "± 22691",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11803378,
            "range": "± 9075203",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 12027738,
            "range": "± 8976969",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11491056,
            "range": "± 8867067",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66279018,
            "range": "± 6796104",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 79318338,
            "range": "± 13914537",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6877605,
            "range": "± 1116491",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 95392,
            "range": "± 5445",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 174313,
            "range": "± 21876",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/PowerOlive/hyper-1/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612332182095,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78331,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6854990,
            "range": "± 257242",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33594,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 234145,
            "range": "± 8272",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52795894,
            "range": "± 1654202",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50653424,
            "range": "± 1303416",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53439594,
            "range": "± 1272964",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3668749,
            "range": "± 189388",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 38382,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 54493,
            "range": "± 3860",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 173549,
            "range": "± 6409",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8747442,
            "range": "± 9268660",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9007633,
            "range": "± 9435332",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8498261,
            "range": "± 9372887",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 57923766,
            "range": "± 4174834",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72145016,
            "range": "± 12571818",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6026172,
            "range": "± 658564",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 61238,
            "range": "± 2705",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 117943,
            "range": "± 4112",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/PowerOlive/hyper-1/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612645919432,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 111598,
            "range": "± 23137",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6499491,
            "range": "± 1548630",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 37456,
            "range": "± 6423",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 240643,
            "range": "± 43778",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52033691,
            "range": "± 1563080",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 53820394,
            "range": "± 11714171",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 59857877,
            "range": "± 7114414",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3590681,
            "range": "± 602457",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 47468,
            "range": "± 6168",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 69725,
            "range": "± 11196",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 202658,
            "range": "± 51411",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10310671,
            "range": "± 9161031",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11170042,
            "range": "± 10147338",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10895449,
            "range": "± 10446359",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61094214,
            "range": "± 10192550",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72937268,
            "range": "± 15584267",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6038365,
            "range": "± 1673315",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 86788,
            "range": "± 12663",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 151651,
            "range": "± 28730",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/PowerOlive/hyper-1/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612938907128,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 77778,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7514586,
            "range": "± 626884",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32736,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 226998,
            "range": "± 2088",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51975728,
            "range": "± 1320369",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49605772,
            "range": "± 3018267",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55666461,
            "range": "± 2186697",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 5311635,
            "range": "± 785083",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36538,
            "range": "± 1230",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53421,
            "range": "± 1590",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 175285,
            "range": "± 1877",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8871534,
            "range": "± 9210849",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8949874,
            "range": "± 8849344",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8571866,
            "range": "± 8644428",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58900667,
            "range": "± 7278794",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72546149,
            "range": "± 14914048",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6617298,
            "range": "± 1531687",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60407,
            "range": "± 1809",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 116909,
            "range": "± 1792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/PowerOlive/hyper-1/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613701165709,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76992,
            "range": "± 91777",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7634639,
            "range": "± 745559",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32205,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 226179,
            "range": "± 6029",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52829777,
            "range": "± 2099236",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54004068,
            "range": "± 3667666",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 56419797,
            "range": "± 1393690",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4465355,
            "range": "± 770373",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35418,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52512,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 175301,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9034496,
            "range": "± 9523555",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9264994,
            "range": "± 9516977",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8882744,
            "range": "± 9481705",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62506124,
            "range": "± 7430800",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80746148,
            "range": "± 14035172",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6855546,
            "range": "± 1353028",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58596,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 116418,
            "range": "± 830",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/PowerOlive/hyper-1/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613786572185,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 73913,
            "range": "± 6878",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7252280,
            "range": "± 990613",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32734,
            "range": "± 3895",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 226106,
            "range": "± 22559",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52072032,
            "range": "± 2521807",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52847328,
            "range": "± 2413148",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55372834,
            "range": "± 1532434",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4260289,
            "range": "± 617208",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37508,
            "range": "± 4384",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58460,
            "range": "± 5435",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 188047,
            "range": "± 27536",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9908350,
            "range": "± 9785191",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10074980,
            "range": "± 10012546",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9526807,
            "range": "± 10403306",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59217712,
            "range": "± 5891346",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 76931321,
            "range": "± 14609556",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6117534,
            "range": "± 1260130",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 61868,
            "range": "± 9428",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 119529,
            "range": "± 15301",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/PowerOlive/hyper-1/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614089723055,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78400,
            "range": "± 1717",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7129741,
            "range": "± 418135",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33769,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 236424,
            "range": "± 5967",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52756454,
            "range": "± 2476799",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50419069,
            "range": "± 2286739",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53288691,
            "range": "± 1720299",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3975230,
            "range": "± 451537",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 37732,
            "range": "± 699",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 61408,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 199129,
            "range": "± 1299",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10316949,
            "range": "± 9510776",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10465424,
            "range": "± 9113511",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10025641,
            "range": "± 9140578",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62665601,
            "range": "± 3944878",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 83029861,
            "range": "± 16363777",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6955440,
            "range": "± 1030174",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 68906,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 133758,
            "range": "± 1018",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/PowerOlive/hyper-1/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614421828673,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 70223,
            "range": "± 1120",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6734836,
            "range": "± 1310569",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30139,
            "range": "± 4044",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 215170,
            "range": "± 5304",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51179531,
            "range": "± 1610374",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48765455,
            "range": "± 8402358",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52172337,
            "range": "± 8138767",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3839744,
            "range": "± 912783",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33831,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53362,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 169847,
            "range": "± 1563",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9225751,
            "range": "± 8805449",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10391922,
            "range": "± 9905208",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8990617,
            "range": "± 8554940",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60264267,
            "range": "± 10047553",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73403559,
            "range": "± 17665433",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5897677,
            "range": "± 583351",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 60865,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 119561,
            "range": "± 2078",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/PowerOlive/hyper-1/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614945119512,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 125555,
            "range": "± 26667",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6844636,
            "range": "± 1351725",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 47990,
            "range": "± 7030",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 285281,
            "range": "± 37531",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52006120,
            "range": "± 1317556",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 53011784,
            "range": "± 3053879",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54112308,
            "range": "± 3371554",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3952559,
            "range": "± 810795",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 56557,
            "range": "± 6386",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 96746,
            "range": "± 14344",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 238380,
            "range": "± 33209",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 13297331,
            "range": "± 9465991",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13749690,
            "range": "± 9810733",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12936932,
            "range": "± 9371972",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 68954694,
            "range": "± 7376746",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80955679,
            "range": "± 14392660",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7031157,
            "range": "± 1159394",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 105855,
            "range": "± 14254",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 193329,
            "range": "± 37559",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615274398217,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 115476,
            "range": "± 16037",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6038627,
            "range": "± 1956231",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 38084,
            "range": "± 7052",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 239488,
            "range": "± 46541",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52007115,
            "range": "± 1650226",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47457518,
            "range": "± 9149826",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54971578,
            "range": "± 9535982",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3333654,
            "range": "± 641355",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 46780,
            "range": "± 15231",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 77167,
            "range": "± 13991",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 195761,
            "range": "± 73029",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 11376898,
            "range": "± 10147507",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11306018,
            "range": "± 9477139",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 11251148,
            "range": "± 9652086",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 58852121,
            "range": "± 9182713",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 72257310,
            "range": "± 15089440",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6042069,
            "range": "± 1676436",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 90709,
            "range": "± 28621",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 163738,
            "range": "± 51576",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/PowerOlive/hyper-1/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615442674234,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 119136,
            "range": "± 19357",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6357750,
            "range": "± 546026",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 43780,
            "range": "± 7164",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 278476,
            "range": "± 68429",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52009234,
            "range": "± 852933",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47245135,
            "range": "± 6179741",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54833416,
            "range": "± 3815441",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3736370,
            "range": "± 765898",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 51513,
            "range": "± 6384",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 87865,
            "range": "± 7317",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 236128,
            "range": "± 23216",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12994942,
            "range": "± 8879335",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13192922,
            "range": "± 9248390",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12292579,
            "range": "± 9306042",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 65896116,
            "range": "± 6707555",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80258015,
            "range": "± 14003615",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7030033,
            "range": "± 1278053",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 101834,
            "range": "± 13382",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 184015,
            "range": "± 10025",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/PowerOlive/hyper-1/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615881154526,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 77320,
            "range": "± 2633",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6639349,
            "range": "± 203833",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33281,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 227826,
            "range": "± 5811",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52792308,
            "range": "± 1695852",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48423406,
            "range": "± 2029372",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52194990,
            "range": "± 898334",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3604330,
            "range": "± 156347",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36786,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58211,
            "range": "± 1737",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 187185,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10515238,
            "range": "± 10058368",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10398387,
            "range": "± 9567271",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10005745,
            "range": "± 9670834",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 62386564,
            "range": "± 3850595",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75894761,
            "range": "± 11803027",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6570508,
            "range": "± 744062",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 67450,
            "range": "± 1239",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 130732,
            "range": "± 4162",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616219855333,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78786,
            "range": "± 19807",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7861745,
            "range": "± 1334819",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33946,
            "range": "± 2911",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 233195,
            "range": "± 12535",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52811139,
            "range": "± 1647506",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 54446329,
            "range": "± 5019130",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55348478,
            "range": "± 3504790",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4737234,
            "range": "± 789195",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 38330,
            "range": "± 2400",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 61622,
            "range": "± 6207",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 191912,
            "range": "± 19577",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10662719,
            "range": "± 10202625",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10837120,
            "range": "± 9686301",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10402379,
            "range": "± 9591658",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66990760,
            "range": "± 9077628",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 86705573,
            "range": "± 16214796",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7242691,
            "range": "± 1357128",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 70587,
            "range": "± 9431",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 132220,
            "range": "± 2279",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/PowerOlive/hyper-1/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616498392955,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 77040,
            "range": "± 9481",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6742905,
            "range": "± 411984",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 32099,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 219623,
            "range": "± 11490",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52785185,
            "range": "± 2046729",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49977923,
            "range": "± 2566865",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53047931,
            "range": "± 1522480",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3655021,
            "range": "± 417845",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35794,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 57404,
            "range": "± 2753",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 182776,
            "range": "± 10227",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 9898331,
            "range": "± 9314153",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9951375,
            "range": "± 9698890",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10063606,
            "range": "± 9762481",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 61198776,
            "range": "± 4379434",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 75399303,
            "range": "± 13664233",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6679291,
            "range": "± 1068029",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 67083,
            "range": "± 14053",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 129519,
            "range": "± 25098",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/PowerOlive/hyper-1/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616742362630,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78039,
            "range": "± 12740",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7281032,
            "range": "± 950621",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33165,
            "range": "± 4165",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 228208,
            "range": "± 58130",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52807565,
            "range": "± 2002180",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 53014097,
            "range": "± 4076481",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 55532167,
            "range": "± 3342480",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3854437,
            "range": "± 853559",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36583,
            "range": "± 5192",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58083,
            "range": "± 5268",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 190141,
            "range": "± 23024",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10510881,
            "range": "± 9263480",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 11177825,
            "range": "± 9786176",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10238660,
            "range": "± 9514684",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64298046,
            "range": "± 5242282",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 78652053,
            "range": "± 14406709",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6806999,
            "range": "± 1045318",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 67405,
            "range": "± 13791",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 131456,
            "range": "± 19156",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/PowerOlive/hyper-1/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616824095465,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 75601,
            "range": "± 4983",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6861334,
            "range": "± 436196",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 31999,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 224172,
            "range": "± 9844",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52801173,
            "range": "± 1641873",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 48278148,
            "range": "± 1852581",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52465899,
            "range": "± 1556169",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3726179,
            "range": "± 677107",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35620,
            "range": "± 1465",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 56294,
            "range": "± 2106",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 181623,
            "range": "± 14646",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10022258,
            "range": "± 9472059",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10249039,
            "range": "± 9127593",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9640926,
            "range": "± 9644687",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 60127943,
            "range": "± 3676165",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73881007,
            "range": "± 13833782",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6469353,
            "range": "± 921680",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 64523,
            "range": "± 4464",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 126256,
            "range": "± 7174",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616827823710,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 75878,
            "range": "± 2136",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7315425,
            "range": "± 502538",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33191,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 230234,
            "range": "± 5728",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52776012,
            "range": "± 2114346",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 51355987,
            "range": "± 3191425",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54031699,
            "range": "± 1808411",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4074808,
            "range": "± 542867",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36827,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 59512,
            "range": "± 955",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 186796,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10331127,
            "range": "± 8834180",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10407626,
            "range": "± 9405320",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10274329,
            "range": "± 9373248",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64787195,
            "range": "± 5068595",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 81127181,
            "range": "± 16130351",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 7065184,
            "range": "± 1110228",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 69093,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 129205,
            "range": "± 2180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/PowerOlive/hyper-1/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617769862450,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 122932,
            "range": "± 16518",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6446483,
            "range": "± 1002793",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 46026,
            "range": "± 5125",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 279951,
            "range": "± 36574",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52012249,
            "range": "± 921189",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 55376549,
            "range": "± 5226703",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 58823957,
            "range": "± 5111959",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3750669,
            "range": "± 813478",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 53587,
            "range": "± 4361",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 85783,
            "range": "± 12622",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 225765,
            "range": "± 29225",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 12760574,
            "range": "± 9776939",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 13010782,
            "range": "± 9295121",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 12386470,
            "range": "± 9162614",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 66923597,
            "range": "± 6723861",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 80982047,
            "range": "± 14820811",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6929320,
            "range": "± 1466835",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 103179,
            "range": "± 36224",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 177718,
            "range": "± 23504",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2fdb7b6a2963cea7577df05ddc41c56fee7246",
          "message": "chore(ffi): fix compile errors and warnings (#2492)\n\nAs I understand it, \"cargo rustc\" in gen_header.sh generates a ton of\r\nerrors, but still manages to generate an object that can be used by\r\ncbindgen to generate hyper.h.\r\n\r\nHowever, I tried to make a separate change to add more fields to\r\nhyper.h, and learned that \"cargo rustc\" stops if it reaches 50 errors,\r\nwhich I reached. I was able to buy some headroom and fix a number of\r\nthe compilation errors by adding imports to the fake Cargo.toml we\r\ngenerate in gen_header.sh.\r\n\r\nI wasn't sure how to resolve imports like \"crate::Result\" which appear\r\nto reference the top-level src/error.rs, and print an error when they\r\nare compiled in gen_header.sh. But I only need to buy headroom under\r\nthe 50 error count for now, which I was able to do by adding the\r\nimports.\r\n\r\nIt is possible that someone more familiar with Rust than me could look\r\nat this and know what to change to get the total number of errors to\r\nzero.",
          "timestamp": "2021-04-07T16:12:02-07:00",
          "tree_id": "c86a0c709d655d6d25be94e3fbb6727ece6c8c72",
          "url": "https://github.com/PowerOlive/hyper-1/commit/ed2fdb7b6a2963cea7577df05ddc41c56fee7246"
        },
        "date": 1617856373643,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 67289,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5809004,
            "range": "± 105821",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 28817,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 209743,
            "range": "± 4361",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 50445946,
            "range": "± 914885",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 45693085,
            "range": "± 1539100",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 49844106,
            "range": "± 820406",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3133891,
            "range": "± 173662",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 32435,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 50614,
            "range": "± 1161",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 159584,
            "range": "± 1405",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8791937,
            "range": "± 8835173",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 8921619,
            "range": "± 8831831",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8615395,
            "range": "± 8906795",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54259400,
            "range": "± 3312572",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66727276,
            "range": "± 12366717",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5698282,
            "range": "± 611118",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58160,
            "range": "± 1391",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 113686,
            "range": "± 1760",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123095+nox@users.noreply.github.com",
            "name": "Anthony Ramine",
            "username": "nox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11345394d968d4817e1a0ee2550228ac0ae7ce74",
          "message": "feat(client): add option to allow misplaced spaces in HTTP/1 responses (#2506)",
          "timestamp": "2021-04-20T14:17:48-07:00",
          "tree_id": "3b29f8a6165231bdbe3449acf1c70aeb16bc9153",
          "url": "https://github.com/PowerOlive/hyper-1/commit/11345394d968d4817e1a0ee2550228ac0ae7ce74"
        },
        "date": 1618959492170,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 61035,
            "range": "± 9581",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6364774,
            "range": "± 513388",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 25533,
            "range": "± 4891",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 185018,
            "range": "± 39516",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51968643,
            "range": "± 2407841",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47128211,
            "range": "± 4124767",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 49636542,
            "range": "± 2505754",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3277464,
            "range": "± 404085",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 28986,
            "range": "± 5192",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 46661,
            "range": "± 5050",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 156134,
            "range": "± 19378",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8773871,
            "range": "± 9271619",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9128059,
            "range": "± 1357763",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8558276,
            "range": "± 10223498",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53018221,
            "range": "± 4793914",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69424072,
            "range": "± 14974852",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5809178,
            "range": "± 1050868",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 54478,
            "range": "± 8232",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 108764,
            "range": "± 13999",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "117cc492a62c4051c75e7eec0f624b30db8a20e5",
          "message": "chore(ci): quiet the warnings when verifying the generated header file (#2507)",
          "timestamp": "2021-04-20T17:23:10-07:00",
          "tree_id": "77b730b8de4c7597554f528b8cebaf09aabd0796",
          "url": "https://github.com/PowerOlive/hyper-1/commit/117cc492a62c4051c75e7eec0f624b30db8a20e5"
        },
        "date": 1619001972335,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 76804,
            "range": "± 696",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7040246,
            "range": "± 361779",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33176,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 233641,
            "range": "± 5646",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52798887,
            "range": "± 824407",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 50344921,
            "range": "± 1695793",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53134185,
            "range": "± 1289087",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4095766,
            "range": "± 489311",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36975,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 58526,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 193760,
            "range": "± 2119",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10531239,
            "range": "± 8877678",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10608555,
            "range": "± 9239234",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 10243984,
            "range": "± 9056126",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 64040839,
            "range": "± 3627779",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 77995545,
            "range": "± 13075369",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6764042,
            "range": "± 806866",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 67814,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 130133,
            "range": "± 2285",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "connect": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "1928682b33f98244435ba6d574677546205a15ec",
          "message": "feat(ffi): add HYPERE_INVALID_PEER_MESSAGE error code for parse errors",
          "timestamp": "2021-01-20T15:10:19-08:00",
          "tree_id": "e87d140b4320ce0f482aa7ee06ddeb97a4822f19",
          "url": "https://github.com/PowerOlive/hyper-1/commit/1928682b33f98244435ba6d574677546205a15ec"
        },
        "date": 1611412322033,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49280,
            "range": "± 1851",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inikulin@cloudflare.com",
            "name": "Ivan Nikulin",
            "username": "inikulin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8121f1735aa8efeb0d5e4ef595363c373ba470",
          "message": "fix(client): HTTP/1 client \"Transfer-Encoding\" repair code would panic (#2410)\n\nCloses #2409",
          "timestamp": "2021-01-26T10:36:58-08:00",
          "tree_id": "774a20785cfcebc335095bbd9f4c823305ac5cd4",
          "url": "https://github.com/PowerOlive/hyper-1/commit/2c8121f1735aa8efeb0d5e4ef595363c373ba470"
        },
        "date": 1611711494408,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47948,
            "range": "± 4226",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jplatte+git@posteo.de",
            "name": "Jonas Platte",
            "username": "jplatte"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "43412a950f2052e7865eb596c1d39067b2002a94",
          "message": "refactor(lib): Switch from pin-project to pin-project-lite",
          "timestamp": "2021-01-28T14:09:53-08:00",
          "tree_id": "f8f20dc86e8ecfa06a44b844b7c9c04a6e940a29",
          "url": "https://github.com/PowerOlive/hyper-1/commit/43412a950f2052e7865eb596c1d39067b2002a94"
        },
        "date": 1611887310921,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 73652,
            "range": "± 8598",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e8238c1b8d6351d42546a4423cf5598def1c35e",
          "message": "docs(body): warn about no length check in aggregate (#2415)\n\nThe to_bytes and aggregate don't check how long the body is, so the user\r\nbetter be aware.\r\n\r\nRelates to #2414.",
          "timestamp": "2021-02-02T09:34:40-08:00",
          "tree_id": "90f28099da0218b4f91839d4ca57aa5a3165f7b8",
          "url": "https://github.com/PowerOlive/hyper-1/commit/5e8238c1b8d6351d42546a4423cf5598def1c35e"
        },
        "date": 1612302168328,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50678,
            "range": "± 1349",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2125c67c8087de863f74278a017c4caf37e6a9",
          "message": "perf(body): specialize BufList::copy_to_bytes (#2413)\n\nSome implementations of the Buf trait have an optimized version (for\r\nexample Bytes) of copy_to_bytes, opportunistically use that one.",
          "timestamp": "2021-02-02T17:09:06-08:00",
          "tree_id": "f97fa886587f34e8aa412ff28bb5d237ae850a3f",
          "url": "https://github.com/PowerOlive/hyper-1/commit/4d2125c67c8087de863f74278a017c4caf37e6a9"
        },
        "date": 1612332385769,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50984,
            "range": "± 1118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "dfa1bb291d71978820e8077be94c1d5837935bbc",
          "message": "chore(ci): use --feature-powerset --depth 2 in features check",
          "timestamp": "2021-02-06T07:36:04-08:00",
          "tree_id": "f04ddfede071e40f67435154fd8726f257a4e024",
          "url": "https://github.com/PowerOlive/hyper-1/commit/dfa1bb291d71978820e8077be94c1d5837935bbc"
        },
        "date": 1612644972264,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 50737,
            "range": "± 12897",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/PowerOlive/hyper-1/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1612937881159,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 42551,
            "range": "± 2233",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.westerlind@distilnetworks.com",
            "name": "Markus Westerlind",
            "username": "Marwes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01de8e503c649034a53a8fdf3ad2e107ad9ad2d",
          "message": "refactor(client): Use async/await more (#2437)\n\n* refactor: Use async/await in client.rs\r\n\r\n* refactor: Simplify client.rs a bit more\r\n\r\n* refactor: Allow !Unpin in Lazy\r\n\r\n* Remove some impl Future\r\n\r\n* Remove some combinator use",
          "timestamp": "2021-02-18T10:35:43-08:00",
          "tree_id": "ecce068928942422a611eea6f2e2c7533022f73d",
          "url": "https://github.com/PowerOlive/hyper-1/commit/f01de8e503c649034a53a8fdf3ad2e107ad9ad2d"
        },
        "date": 1613700197692,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51382,
            "range": "± 1554",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efc1a1cce0abdd4e3263e7ea328ad49616d8050",
          "message": "docs(server): add server example using `tower::make::Shared` (#2440)\n\n`tower` 0.4.5 introduced `Shared` which is a `MakeService` that produces\r\nservices by cloning an inner service. This works quite well with `hyper`\r\nif your service doesn't need the incoming connection and implements\r\n`Clone`.\r\n\r\nHowever that might not be entirely obvious so I thought it made sense to\r\nadd an example to the docs.\r\n\r\nI wasn't quite sure if the example should go in the server or service\r\nmodule docs but since there already is an example using\r\n`make_service_fn` in the server docs I opted to add it there. Let me\r\nknow if you'd rather have it somewhere else.",
          "timestamp": "2021-02-19T13:50:43-08:00",
          "tree_id": "6b933a218c948e3b2b4e3c4609e622016b6c7137",
          "url": "https://github.com/PowerOlive/hyper-1/commit/6efc1a1cce0abdd4e3263e7ea328ad49616d8050"
        },
        "date": 1613786949513,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 66052,
            "range": "± 5314",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zonyitoo@users.noreply.github.com",
            "name": "ty",
            "username": "zonyitoo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c946af49cc7fbbc6bd4894283a654625c2ea383",
          "message": "feat(server): add `AddrIncoming::from_listener` constructor (#2439)",
          "timestamp": "2021-02-22T16:18:38-08:00",
          "tree_id": "895fb85f54da75512a8656c13aeea97236b7fc04",
          "url": "https://github.com/PowerOlive/hyper-1/commit/4c946af49cc7fbbc6bd4894283a654625c2ea383"
        },
        "date": 1614090491001,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49769,
            "range": "± 1239",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b",
          "message": "docs(ffi): generate FFI documentation (#2447)",
          "timestamp": "2021-02-26T19:00:37-08:00",
          "tree_id": "6fb822dc3e7c899c8cfbd23348c87583879f465a",
          "url": "https://github.com/PowerOlive/hyper-1/commit/f162ca2f2fd14681e11dd8b9ba8d1469b2b9271b"
        },
        "date": 1614421439220,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 64787,
            "range": "± 9517",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter@smitmail.eu",
            "name": "Peter Smit",
            "username": "psmit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb",
          "message": "fix(server): skip automatic Content-Length headers when not allowed (#2216)\n\nCloses #2215",
          "timestamp": "2021-03-04T17:03:33-08:00",
          "tree_id": "8c8f7d8ab9d86213ee1f48be464f206ede927d71",
          "url": "https://github.com/PowerOlive/hyper-1/commit/8cbf9527dfb313b3f84fcd83260c5c72ce4a1beb"
        },
        "date": 1614946253468,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 49196,
            "range": "± 5389",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76654022+0x79756b69@users.noreply.github.com",
            "name": "0x79756b69",
            "username": "0x79756b69"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34085afef66b453dfee1c561e6683546bf4600c8",
          "message": "docs(examples): use hyper v0.14 and full feature (#2451)",
          "timestamp": "2021-03-08T14:19:24-08:00",
          "tree_id": "67d588d032acb77655c972fa0622805749a364a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/34085afef66b453dfee1c561e6683546bf4600c8"
        },
        "date": 1615273499472,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 69338,
            "range": "± 15385",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "346512016@qq.com",
            "name": "kolapapa",
            "username": "kolapapa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "297a068454115e8d5426f9051398d851f69235bf",
          "message": "docs(examples): upgrade tokio version (#2456)",
          "timestamp": "2021-03-10T10:00:39-08:00",
          "tree_id": "98004bc3096176316ed6534e6e96eda3d08cb825",
          "url": "https://github.com/PowerOlive/hyper-1/commit/297a068454115e8d5426f9051398d851f69235bf"
        },
        "date": 1615443311150,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 65536,
            "range": "± 6287",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@dbrgn.ch",
            "name": "Danilo Bargen",
            "username": "dbrgn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5",
          "message": "docs(body): add links to to_bytes and aggregate (#2464)\n\nSince these two functions are not methods on the `Body`, they aren't\r\nvery discoverable. So a note in the docs would definitely be helpful.",
          "timestamp": "2021-03-15T15:40:28-07:00",
          "tree_id": "14b6039d4a111f52351c76ea2f9cdbb19cf616c6",
          "url": "https://github.com/PowerOlive/hyper-1/commit/eb0e7186963bbe4fa1ad4478ac493f75ddc92ae5"
        },
        "date": 1615881766275,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 61921,
            "range": "± 16121",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616218632841,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 48202,
            "range": "± 2998",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomasdezeeuw@gmail.com",
            "name": "Thomas de Zeeuw",
            "username": "Thomasdezeeuw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41f99578a53845e5e0bb999c101bef8307e1ce5f",
          "message": "refactor(dependencies): update to socket2 v0.4.0 (#2472)",
          "timestamp": "2021-03-22T15:16:31-07:00",
          "tree_id": "bd982e385979d9a9b4441522a8e54b095729bb2e",
          "url": "https://github.com/PowerOlive/hyper-1/commit/41f99578a53845e5e0bb999c101bef8307e1ce5f"
        },
        "date": 1616497337177,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 60215,
            "range": "± 7655",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vagelis.prokopiou@gmail.com",
            "name": "Vagelis Prokopiou",
            "username": "Vagelis-Prokopiou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51ed71b0a6e1d90d324f87151434334bab6fb837",
          "message": "docs(client): use Method::POST to match the example in https://hyper.rs/guides/client/advanced/ (#2479)",
          "timestamp": "2021-03-25T13:34:03-07:00",
          "tree_id": "908a1fb4a47378d16439458035a25a2dd41c1516",
          "url": "https://github.com/PowerOlive/hyper-1/commit/51ed71b0a6e1d90d324f87151434334bab6fb837"
        },
        "date": 1616741658485,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43112,
            "range": "± 4349",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba",
          "message": "v0.14.5",
          "timestamp": "2021-03-26T12:03:24-07:00",
          "tree_id": "db5bad5201b0c92abc03652924d33f6cb080b9f1",
          "url": "https://github.com/PowerOlive/hyper-1/commit/98e7e0bd15642cf9e4bf07b3b03d8b4e538623ba"
        },
        "date": 1616823630373,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 47153,
            "range": "± 6069",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghostd@users.noreply.github.com",
            "name": "Vincent Ricard",
            "username": "ghostd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48fdaf160689f333e9bb63388d0b1d0fa29a1391",
          "message": "fix(headers): Support multiple Content-Length values on same line (#2471)\n\nCloses #2470",
          "timestamp": "2021-03-19T10:38:58-07:00",
          "tree_id": "8444662a531c8356a16120e2128a7e4f20b905a2",
          "url": "https://github.com/PowerOlive/hyper-1/commit/48fdaf160689f333e9bb63388d0b1d0fa29a1391"
        },
        "date": 1616826964966,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 64195,
            "range": "± 10956",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa4a2eaa44ce4eb8a0049e4363f59f323ed56854",
          "message": "chore(LICENSE): update license year (#2491)",
          "timestamp": "2021-04-06T14:49:37-07:00",
          "tree_id": "b6f6db86e5b8ff78bec3e88897081599827b72bd",
          "url": "https://github.com/PowerOlive/hyper-1/commit/aa4a2eaa44ce4eb8a0049e4363f59f323ed56854"
        },
        "date": 1617769287549,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 64596,
            "range": "± 5612",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kevin@burke.dev",
            "name": "Kevin Burke",
            "username": "kevinburke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed2fdb7b6a2963cea7577df05ddc41c56fee7246",
          "message": "chore(ffi): fix compile errors and warnings (#2492)\n\nAs I understand it, \"cargo rustc\" in gen_header.sh generates a ton of\r\nerrors, but still manages to generate an object that can be used by\r\ncbindgen to generate hyper.h.\r\n\r\nHowever, I tried to make a separate change to add more fields to\r\nhyper.h, and learned that \"cargo rustc\" stops if it reaches 50 errors,\r\nwhich I reached. I was able to buy some headroom and fix a number of\r\nthe compilation errors by adding imports to the fake Cargo.toml we\r\ngenerate in gen_header.sh.\r\n\r\nI wasn't sure how to resolve imports like \"crate::Result\" which appear\r\nto reference the top-level src/error.rs, and print an error when they\r\nare compiled in gen_header.sh. But I only need to buy headroom under\r\nthe 50 error count for now, which I was able to do by adding the\r\nimports.\r\n\r\nIt is possible that someone more familiar with Rust than me could look\r\nat this and know what to change to get the total number of errors to\r\nzero.",
          "timestamp": "2021-04-07T16:12:02-07:00",
          "tree_id": "c86a0c709d655d6d25be94e3fbb6727ece6c8c72",
          "url": "https://github.com/PowerOlive/hyper-1/commit/ed2fdb7b6a2963cea7577df05ddc41c56fee7246"
        },
        "date": 1617856959052,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 43186,
            "range": "± 3291",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123095+nox@users.noreply.github.com",
            "name": "Anthony Ramine",
            "username": "nox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11345394d968d4817e1a0ee2550228ac0ae7ce74",
          "message": "feat(client): add option to allow misplaced spaces in HTTP/1 responses (#2506)",
          "timestamp": "2021-04-20T14:17:48-07:00",
          "tree_id": "3b29f8a6165231bdbe3449acf1c70aeb16bc9153",
          "url": "https://github.com/PowerOlive/hyper-1/commit/11345394d968d4817e1a0ee2550228ac0ae7ce74"
        },
        "date": 1618958601422,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 51361,
            "range": "± 1014",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "117cc492a62c4051c75e7eec0f624b30db8a20e5",
          "message": "chore(ci): quiet the warnings when verifying the generated header file (#2507)",
          "timestamp": "2021-04-20T17:23:10-07:00",
          "tree_id": "77b730b8de4c7597554f528b8cebaf09aabd0796",
          "url": "https://github.com/PowerOlive/hyper-1/commit/117cc492a62c4051c75e7eec0f624b30db8a20e5"
        },
        "date": 1619002018355,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 54525,
            "range": "± 14332",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}