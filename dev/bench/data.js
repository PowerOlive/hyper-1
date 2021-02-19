window.BENCHMARK_DATA = {
  "lastUpdate": 1613700201844,
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
      }
    ]
  }
}