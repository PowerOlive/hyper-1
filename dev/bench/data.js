window.BENCHMARK_DATA = {
  "lastUpdate": 1611714261660,
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
      }
    ]
  }
}