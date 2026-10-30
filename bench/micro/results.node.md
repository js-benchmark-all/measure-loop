
* runtime: node 24.19.0 (x64-linux)
## is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`59.61ns ± 5.01ns`|`187.97ns`|`15.67ns - 546.68ns`|
|regex|`524288`|`113.04ns ± 2.16ns`|`198.62ns`|`61.98ns - 221.64ns`|
|fp|`524288`|`225.21ns ± 3.16ns`|`362.09ns`|`200.74ns - 374.55ns`|
## is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`182.6ns ± 6.48ns`|`416.45ns`|`103.96ns - 425.8ns`|
|regex|`524288`|`189.6ns ± 2.87ns`|`267.34ns`|`108.89ns - 269.1ns`|
|fp|`524288`|`677.16ns ± 8.5ns`|`911.03ns`|`481.26ns - 957.63ns`|
