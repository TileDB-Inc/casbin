window.BENCHMARK_DATA = {
  "lastUpdate": 1701184368001,
  "repoUrl": "https://github.com/TileDB-Inc/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "andreas.bichinger@gmail.com",
            "name": "abichinger",
            "username": "abichinger"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6703d2f87e113696f2f613cde1597fcec6afcf31",
          "message": "feat: support all types for JSON request in ABAC (#1343)",
          "timestamp": "2023-11-24T15:55:12+08:00",
          "tree_id": "00445c0aed43f07194a3cfcda2f01365771e009a",
          "url": "https://github.com/TileDB-Inc/casbin/commit/6703d2f87e113696f2f613cde1597fcec6afcf31"
        },
        "date": 1701184367330,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.64,
            "unit": "ns/op",
            "extra": "68319325 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68319325 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68319325 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 160.1,
            "unit": "ns/op",
            "extra": "7476392 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7476392 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7476392 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 159.5,
            "unit": "ns/op",
            "extra": "7558245 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7558245 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7558245 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 174.5,
            "unit": "ns/op",
            "extra": "6831679 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6831679 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6831679 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 176.9,
            "unit": "ns/op",
            "extra": "6650486 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6650486 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6650486 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 156.4,
            "unit": "ns/op",
            "extra": "7191639 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7191639 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7191639 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 161.1,
            "unit": "ns/op",
            "extra": "6319228 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6319228 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6319228 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 170.2,
            "unit": "ns/op",
            "extra": "7023909 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "7023909 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7023909 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2874,
            "unit": "ns/op",
            "extra": "394954 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1540,
            "unit": "B/op",
            "extra": "394954 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "394954 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 181.4,
            "unit": "ns/op",
            "extra": "6912662 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6912662 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6912662 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 160.7,
            "unit": "ns/op",
            "extra": "7410364 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7410364 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7410364 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 161,
            "unit": "ns/op",
            "extra": "7445847 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7445847 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7445847 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 291.4,
            "unit": "ns/op",
            "extra": "4126911 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "4126911 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "4126911 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 118.6,
            "unit": "ns/op",
            "extra": "9575618 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "9575618 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9575618 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 442,
            "unit": "ns/op",
            "extra": "2678528 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2678528 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2678528 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 477.9,
            "unit": "ns/op",
            "extra": "2620450 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2620450 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2620450 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 513.3,
            "unit": "ns/op",
            "extra": "2328547 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2328547 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2328547 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 472.8,
            "unit": "ns/op",
            "extra": "2395252 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2395252 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2395252 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 545.9,
            "unit": "ns/op",
            "extra": "2072505 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 172,
            "unit": "B/op",
            "extra": "2072505 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2072505 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1158,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 473,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 493.9,
            "unit": "ns/op",
            "extra": "2457139 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2457139 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2457139 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 541.5,
            "unit": "ns/op",
            "extra": "2111212 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2111212 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2111212 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1214,
            "unit": "ns/op",
            "extra": "998419 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 293,
            "unit": "B/op",
            "extra": "998419 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "998419 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.65,
            "unit": "ns/op",
            "extra": "67970275 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67970275 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67970275 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3604,
            "unit": "ns/op",
            "extra": "321070 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1505,
            "unit": "B/op",
            "extra": "321070 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "321070 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5448,
            "unit": "ns/op",
            "extra": "218245 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2061,
            "unit": "B/op",
            "extra": "218245 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "218245 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 49812,
            "unit": "ns/op",
            "extra": "24362 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20262,
            "unit": "B/op",
            "extra": "24362 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "24362 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 479089,
            "unit": "ns/op",
            "extra": "2499 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191377,
            "unit": "B/op",
            "extra": "2499 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4828,
            "unit": "allocs/op",
            "extra": "2499 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5231762,
            "unit": "ns/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901759,
            "unit": "B/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48223,
            "unit": "allocs/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 57305,
            "unit": "ns/op",
            "extra": "20685 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20370,
            "unit": "B/op",
            "extra": "20685 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20685 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 573687,
            "unit": "ns/op",
            "extra": "1958 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194494,
            "unit": "B/op",
            "extra": "1958 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6020,
            "unit": "allocs/op",
            "extra": "1958 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6012359,
            "unit": "ns/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1939756,
            "unit": "B/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60569,
            "unit": "allocs/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4570,
            "unit": "ns/op",
            "extra": "245760 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1844,
            "unit": "B/op",
            "extra": "245760 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "245760 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5148,
            "unit": "ns/op",
            "extra": "227823 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1823,
            "unit": "B/op",
            "extra": "227823 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "227823 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2873,
            "unit": "ns/op",
            "extra": "374961 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1533,
            "unit": "B/op",
            "extra": "374961 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "374961 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3973041,
            "unit": "ns/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1325418,
            "unit": "B/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "300 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6067,
            "unit": "ns/op",
            "extra": "191857 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3063,
            "unit": "B/op",
            "extra": "191857 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "191857 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6961,
            "unit": "ns/op",
            "extra": "169258 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2475,
            "unit": "B/op",
            "extra": "169258 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "169258 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4198,
            "unit": "ns/op",
            "extra": "284332 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1761,
            "unit": "B/op",
            "extra": "284332 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "284332 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 23722,
            "unit": "ns/op",
            "extra": "50240 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16736,
            "unit": "B/op",
            "extra": "50240 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "50240 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 70419,
            "unit": "ns/op",
            "extra": "17169 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "17169 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17169 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 734475,
            "unit": "ns/op",
            "extra": "1645 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125914,
            "unit": "B/op",
            "extra": "1645 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1645 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 8000667,
            "unit": "ns/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349921,
            "unit": "B/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6111364197,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5346616728,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60950286,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 165542896,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141509762,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676561,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6197522963,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5486308416,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62561060,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10224,
            "unit": "ns/op",
            "extra": "113505 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7589,
            "unit": "B/op",
            "extra": "113505 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "113505 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 503,
            "unit": "ns/op",
            "extra": "2432686 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2432686 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2432686 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10212,
            "unit": "ns/op",
            "extra": "116086 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7598,
            "unit": "B/op",
            "extra": "116086 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "116086 times\n4 procs"
          }
        ]
      }
    ]
  }
}