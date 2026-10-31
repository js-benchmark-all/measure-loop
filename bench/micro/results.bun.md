* runtime: bun 1.4.4 (x64-linux)
## cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`300.47ps ± 9.95ps`|`1.07ns`|`244.38ps - 96ns`|## string
### filter

#### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`45ns ± 941.57ps`|`86.5ns`|`38.46ns - 87.29ns`|
|fp & procedural filter|`524288`|`59.14ns ± 843.25ps`|`100.93ns`|`54.79ns - 110.84ns`|
|fp|`524288`|`143.94ns ± 668.03ps`|`176.55ns`|`135.29ns - 194.32ns`|
#### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|regex|`524288`|`87.54ns ± 428.7ps`|`103.85ns`|`83.12ns - 124.07ns`|
|fp & procedural filter|`524288`|`199.72ns ± 4.67ns`|`333.34ns`|`162.25ns - 333.83ns`|
|fp|`524288`|`400.62ns ± 1.52ns`|`426.8ns`|`310.92ns - 443.66ns`|## object
### access

#### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`901.63ps ± 12.86ps`|`1.29ns`|`699.22ps - 1.34ns`|
|polymorphic array|`524288`|`936.82ps ± 8.91ps`|`1.21ns`|`765.14ps - 1.46ns`|
|monomorphic object|`524288`|`1.03ns ± 26.68ps`|`3.12ns`|`831.3ps - 3.32ns`|
|polymorphic object|`524288`|`1.24ns ± 28.23ps`|`2.43ns`|`1.08ns - 4.57ns`|
|megamorphic object|`524288`|`4.41ns ± 50.54ps`|`8.35ns`|`4.2ns - 9.4ns`|
#### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`4.39ns ± 76.9ps`|`7.48ns`|`2.78ns - 7.6ns`|
|monomorphic object|`524288`|`8.14ns ± 529.91ps`|`35.4ns`|`4.55ns - 38.11ns`|
#### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|prototype chain (override prototype)|`524288`|`2.14ns ± 39.59ps`|`3.61ns`|`1.92ns - 5.24ns`|
|prototype chain (create with prototype)|`524288`|`2.22ns ± 42.79ps`|`4.26ns`|`1.98ns - 5.97ns`|
|direct assign|`524288`|`3.06ns ± 104.87ps`|`7.23ns`|`2.02ns - 8.02ns`|
|WeakMap store|`524288`|`8.01ns ± 162.37ps`|`12.67ns`|`3.37ns - 13.16ns`|### init

#### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`58.76ns ± 1.29ns`|`113.68ns`|`52.41ns - 194.74ns`|
|object literal (computed properties)|`524288`|`285.84ns ± 968.37ps`|`317.5ns`|`255.74ns - 368.89ns`|
|Object.create(null)|`524288`|`286.37ns ± 284.73ps`|`294.62ns`|`280.31ns - 301.11ns`|
|object literal|`524288`|`288.46ns ± 1.76ns`|`308.47ns`|`257.67ns - 503.61ns`|
|function constructor (freezed proto)|`524288`|`301.89ns ± 243.16ps`|`308.12ns`|`296.7ns - 319.36ns`|
|function constructor|`524288`|`302.9ns ± 387.81ps`|`317.76ns`|`295.45ns - 334.5ns`|
#### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Object.create()|`524288`|`646.86ps ± 13.74ps`|`916.99ps`|`513.43ps - 1ns`|
|set prototype|`524288`|`689.59ps ± 14.74ps`|`946.04ps`|`518.31ps - 946.29ps`|
|function constructor|`524288`|`726.05ps ± 15.58ps`|`921.63ps`|`498.78ps - 946.29ps`|
|constructor|`524288`|`795.19ps ± 35.57ps`|`1.31ns`|`520.75ps - 4.84ns`|
|set __proto__|`524288`|`22.52ns ± 483.69ps`|`39.33ns`|`18.43ns - 49.05ns`|
|Object.setPrototypeOf()|`524288`|`35.06ns ± 748.18ps`|`44.91ns`|`23.74ns - 52.29ns`|
|object spread|`524288`|`53.17ns ± 1.2ns`|`67.53ns`|`34.14ns - 82.32ns`|## array
### unique items
#### size 8
##### 1 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`18.67ns ± 285.85ps`|`28.15ns`|`13.56ns - 29.19ns`|
|Set|`1048576`|`95.52ns ± 1.53ns`|`133.62ns`|`70.75ns - 146.76ns`|
|Set direct assign|`1048576`|`150.63ns ± 2.37ns`|`188.04ns`|`98.08ns - 256.1ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`16.85ns ± 249.35ps`|`26.73ns`|`13.11ns - 30.06ns`|
|Set|`1048576`|`49.14ns ± 807.4ps`|`70.09ns`|`35.94ns - 75.11ns`|
|Set direct assign|`1048576`|`76.51ns ± 1.27ns`|`124ns`|`58.04ns - 154.66ns`|##### 2 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`21.23ns ± 247.81ps`|`35.02ns`|`17.75ns - 39.91ns`|
|Set|`1048576`|`89.15ns ± 358.53ps`|`103.04ns`|`80.2ns - 145.19ns`|
|Set direct assign|`1048576`|`113.36ns ± 299.39ps`|`122.64ns`|`102.94ns - 151.75ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`21.48ns ± 215.66ps`|`35.39ns`|`18.49ns - 38.03ns`|
|Set|`1048576`|`48.63ns ± 512.54ps`|`73.65ns`|`39.35ns - 76.96ns`|
|Set direct assign|`1048576`|`67.07ns ± 635.25ps`|`121.35ns`|`60.99ns - 124.07ns`|##### 4 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`49.47ns ± 716.98ps`|`83.65ns`|`40.68ns - 85.3ns`|
|Set|`1048576`|`107.92ns ± 652.98ps`|`126.24ns`|`93.71ns - 175.99ns`|
|Set direct assign|`1048576`|`131.47ns ± 1.15ns`|`223.81ns`|`120.7ns - 230.56ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`46.51ns ± 417.08ps`|`78.14ns`|`42.09ns - 79.99ns`|
|Array.includes()|`1048576`|`47.83ns ± 596.42ps`|`80.13ns`|`41.06ns - 82.6ns`|
|Set direct assign|`1048576`|`72.65ns ± 842.74ps`|`123.37ns`|`64.39ns - 124.59ns`|##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`89.44ns ± 2.52ns`|`233.78ns`|`70.67ns - 404.04ns`|
|Set|`1048576`|`168.62ns ± 1.48ns`|`225.89ns`|`146.16ns - 260.06ns`|
|Set direct assign|`1048576`|`200.7ns ± 2.07ns`|`308.08ns`|`174.38ns - 319.29ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`82.44ns ± 1.16ns`|`136.22ns`|`70.81ns - 139.57ns`|
|Set|`1048576`|`93.62ns ± 1.15ns`|`120.82ns`|`77.42ns - 266.8ns`|
|Set direct assign|`1048576`|`123.32ns ± 1.29ns`|`183.42ns`|`103.46ns - 189.7ns`|#### size 16
##### 2 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`41.65ns ± 1.13ns`|`66.12ns`|`30.34ns - 66.77ns`|
|Set|`524288`|`122.91ns ± 2.43ns`|`200.9ns`|`105.76ns - 202.86ns`|
|Set direct assign|`524288`|`179.26ns ± 2.81ns`|`311.27ns`|`160.63ns - 313.83ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`40.06ns ± 1.05ns`|`63.16ns`|`30.12ns - 63.61ns`|
|Set|`524288`|`77.5ns ± 2.39ns`|`193.56ns`|`62.39ns - 199.82ns`|
|Set direct assign|`524288`|`125.08ns ± 2.13ns`|`223.27ns`|`112.82ns - 223.28ns`|##### 4 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`73.44ns ± 1.85ns`|`126.59ns`|`60.82ns - 128.25ns`|
|Set|`524288`|`135.85ns ± 2.69ns`|`224.99ns`|`119.54ns - 228.6ns`|
|Set direct assign|`524288`|`183.31ns ± 769.32ps`|`231.55ns`|`174.86ns - 234.65ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`63.21ns ± 279.06ps`|`79.25ns`|`60.24ns - 81.92ns`|
|Set|`524288`|`75.83ns ± 1.46ns`|`132.77ns`|`67.28ns - 135.56ns`|
|Set direct assign|`524288`|`124.54ns ± 379.8ps`|`143.81ns`|`118.84ns - 147.06ns`|##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`126.07ns ± 2.61ns`|`222.58ns`|`109.95ns - 223.2ns`|
|Set|`524288`|`210.19ns ± 3.67ns`|`313.46ns`|`176.21ns - 316.37ns`|
|Set direct assign|`524288`|`280.24ns ± 4.53ns`|`425.67ns`|`238.43ns - 473.47ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`129.83ns ± 3.04ns`|`215.9ns`|`110.03ns - 220.72ns`|
|Set|`524288`|`135.54ns ± 2.24ns`|`168.26ns`|`102.86ns - 183.26ns`|
|Set direct assign|`524288`|`160.78ns ± 526.54ps`|`178.21ns`|`154.9ns - 216.36ns`|##### 16 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`177.46ns ± 1.07ns`|`200.21ns`|`170.24ns - 301.43ns`|
|Set|`524288`|`266.53ns ± 2.09ns`|`379.84ns`|`253.66ns - 385.94ns`|
|Set direct assign|`524288`|`325.13ns ± 3.99ns`|`509.61ns`|`298.64ns - 544.57ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`148.25ns ± 2.4ns`|`225.96ns`|`123.53ns - 230.62ns`|
|Array.includes()|`524288`|`186.39ns ± 2.64ns`|`328.89ns`|`168.09ns - 333.54ns`|
|Set direct assign|`524288`|`192.66ns ± 2.9ns`|`293.9ns`|`167.9ns - 302.73ns`|#### size 64
##### 8 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`131072`|`340.11ns ± 605.71ps`|`347.85ns`|`334.27ns - 347.85ns`|
|Set|`131072`|`428.95ns ± 8.34ns`|`495.3ns`|`335.69ns - 495.3ns`|
|Set direct assign|`131072`|`508.22ns ± 5.09ns`|`635.27ns`|`492.79ns - 635.27ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`263.01ns ± 540.17ps`|`273.29ns`|`258.87ns - 273.29ns`|
|Array.includes()|`131072`|`336.16ns ± 424.02ps`|`340.56ns`|`332.22ns - 340.56ns`|
|Set direct assign|`131072`|`422.41ns ± 823.43ps`|`442.62ns`|`415.7ns - 442.62ns`|##### 16 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`435.82ns ± 1.77ns`|`464.85ns`|`427.68ns - 464.85ns`|
|Array.includes()|`131072`|`514.89ns ± 968.27ps`|`527.72ns`|`504.66ns - 527.72ns`|
|Set direct assign|`131072`|`766.49ns ± 7.61ns`|`822.43ns`|`675.23ns - 822.43ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`381.42ns ± 4.02ns`|`404.91ns`|`300.1ns - 404.91ns`|
|Array.includes()|`131072`|`508.24ns ± 751.93ps`|`518.93ns`|`502.1ns - 518.93ns`|
|Set direct assign|`131072`|`610.49ns ± 8.48ns`|`685.6ns`|`534.66ns - 685.6ns`|##### 32 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`765.42ns ± 3.21ns`|`818.41ns`|`722.71ns - 818.41ns`|
|Set direct assign|`131072`|`974.5ns ± 4.05ns`|`1.03μs`|`917.92ns - 1.03μs`|
|Array.includes()|`131072`|`1.03μs ± 6.38ns`|`1.1μs`|`971.06ns - 1.1μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`557.21ns ± 2.49ns`|`601.98ns`|`537.44ns - 601.98ns`|
|Set direct assign|`131072`|`767.46ns ± 20.98ns`|`976.58ns`|`671.76ns - 976.58ns`|
|Array.includes()|`131072`|`1.19μs ± 54ns`|`1.91μs`|`949.11ns - 1.91μs`|##### 64 unique items

###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.23μs ± 12.02ns`|`1.31μs`|`1.04μs - 1.31μs`|
|Set direct assign|`131072`|`1.49μs ± 13.19ns`|`1.57μs`|`1.27μs - 1.57μs`|
|Array.includes()|`131072`|`2.32μs ± 9.06ns`|`2.52μs`|`2.26μs - 2.52μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`740.01ns ± 10.67ns`|`820.39ns`|`597.73ns - 820.39ns`|
|Set direct assign|`131072`|`885.77ns ± 18.97ns`|`1.17μs`|`804.88ns - 1.17μs`|
|Array.includes()|`131072`|`2.31μs ± 4.17ns`|`2.36μs`|`2.27μs - 2.36μs`|## coroutine

### overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`67.75ns ± 620ps`|`81.58ns`|`54.99ns - 87.23ns`|
|await promise|`524288`|`73.74ns ± 408.22ps`|`94.12ns`|`68.18ns - 96.58ns`|
|await non-promise|`524288`|`98.02ns ± 15.8ns`|`966.43ns`|`63.88ns - 1.85μs`|
|async generator|`524288`|`364.92ns ± 1.9ns`|`412.31ns`|`351.89ns - 579.62ns`|### async iterable

#### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`549.96ns ± 11.12ns`|`843.14ns`|`517.84ns - 843.14ns`|
|generator|`131072`|`855.33ns ± 6.65ns`|`1.03μs`|`828.9ns - 1.03μs`|## lru
### capacity 8

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`48.34ns ± 308.93ps`|`61.78ns`|`42.67ns - 63.36ns`|`48.34ns ± 8.79ns`|`313.9ns`|`109.46ns - 350.22ns`|
|map|`524288`|`65.12ns ± 743.36ps`|`98.85ns`|`58.91ns - 99.49ns`|`65.12ns ± 7.32ns`|`340.25ns`|`117.75ns - 343.52ns`|
|linked list map|`524288`|`70.52ns ± 479.74ps`|`100.12ns`|`63.24ns - 100.75ns`|`70.52ns ± 7.07ns`|`269.26ns`|`118.83ns - 368.18ns`|
|two object buckets|`524288`|`183.52ns ± 450.25ps`|`208.06ns`|`175.85ns - 218.73ns`|`183.52ns ± 2.85ns`|`275.56ns`|`136.24ns - 386.77ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`11.4ns ± 218.57ps`|`18.29ns`|`6.97ns - 18.52ns`|`11.4ns ± 10.55ns`|`236.67ns`|`107.13ns - 289.61ns`|
|linked list map|`524288`|`14.43ns ± 181.99ps`|`19.58ns`|`9.79ns - 20.8ns`|`14.43ns ± 466.64ns`|`13.01μs`|`113.35ns - 13.1μs`|
|two map buckets|`524288`|`14.77ns ± 341.15ps`|`26.52ns`|`9.32ns - 27.36ns`|`14.77ns ± 10.92ns`|`313.52ns`|`109.07ns - 396.1ns`|
|two object buckets|`524288`|`60.8ns ± 435.28ps`|`75.42ns`|`53.97ns - 102.15ns`|`60.8ns ± 7.75ns`|`249.86ns`|`116.87ns - 329.23ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`33.23ns ± 449.73ps`|`53.11ns`|`27.78ns - 58.62ns`|`33.23ns ± 9.72ns`|`205.65ns`|`119.03ns - 320.82ns`|
|map|`524288`|`51.29ns ± 948.28ps`|`91.37ns`|`42.11ns - 111.27ns`|`51.29ns ± 10.43ns`|`418.61ns`|`124.45ns - 424.23ns`|
|linked list map|`524288`|`53.96ns ± 472.18ps`|`80.43ns`|`49.01ns - 81.43ns`|`53.96ns ± 8.26ns`|`218.9ns`|`126.38ns - 234.6ns`|
|two object buckets|`524288`|`152.46ns ± 1.68ns`|`217.71ns`|`140.49ns - 222.85ns`|`152.46ns ± 2.34ns`|`285.5ns`|`141.56ns - 329.56ns`|### capacity 64

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`61.28ns ± 2.04ns`|`171.28ns`|`48.41ns - 178.93ns`|`61.28ns ± 12.63ns`|`665.52ns`|`126.63ns - 726.9ns`|
|linked list map|`524288`|`69.47ns ± 654.79ps`|`102.09ns`|`62.2ns - 110.01ns`|`69.47ns ± 7.56ns`|`281.34ns`|`125.13ns - 330.42ns`|
|map|`524288`|`91.61ns ± 885ps`|`150.33ns`|`84.2ns - 159.49ns`|`91.61ns ± 5.03ns`|`222.16ns`|`114.93ns - 287.29ns`|
|two object buckets|`524288`|`201.38ns ± 2ns`|`285.95ns`|`186.6ns - 297.96ns`|`201.38ns ± 2.74ns`|`280.06ns`|`150.97ns - 325.27ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`12.71ns ± 255.36ps`|`22.01ns`|`7.33ns - 24.24ns`|`12.71ns ± 428.39ns`|`12.41μs`|`124.38ns - 12.86μs`|
|map|`524288`|`13.06ns ± 679.12ps`|`24.62ns`|`7.01ns - 93ns`|`13.06ns ± 11.51ns`|`192.96ns`|`116.89ns - 442.62ns`|
|two map buckets|`524288`|`21.81ns ± 397.58ps`|`34.45ns`|`15ns - 34.82ns`|`21.81ns ± 11.83ns`|`439.63ns`|`109.92ns - 443.07ns`|
|two object buckets|`524288`|`67.34ns ± 584.42ps`|`94.37ns`|`59.83ns - 99.62ns`|`67.34ns ± 8.28ns`|`329.42ns`|`125.96ns - 342.07ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`30.02ns ± 425.17ps`|`47.31ns`|`24.34ns - 49.19ns`|`30.02ns ± 10.51ns`|`264.13ns`|`120.81ns - 333.93ns`|
|linked list map|`524288`|`44.75ns ± 317.92ps`|`63.99ns`|`40.5ns - 69.23ns`|`44.75ns ± 10.69ns`|`423.26ns`|`130.77ns - 478.98ns`|
|map|`524288`|`68.13ns ± 984.3ps`|`116.79ns`|`61.82ns - 118.22ns`|`68.13ns ± 6.89ns`|`225.85ns`|`117.76ns - 349.22ns`|
|two object buckets|`524288`|`148.12ns ± 786.4ps`|`210.1ns`|`140.26ns - 211.61ns`|`148.12ns ± 3.65ns`|`271.34ns`|`153.2ns - 352.59ns`|### capacity 512

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`54.38ns ± 459.28ps`|`76.84ns`|`48.35ns - 77.04ns`|`54.38ns ± 9.68ns`|`346.05ns`|`129.18ns - 347.52ns`|
|linked list map|`524288`|`84.4ns ± 699.31ps`|`119.92ns`|`74.85ns - 126.04ns`|`84.4ns ± 9.58ns`|`381.39ns`|`150.39ns - 472.15ns`|
|map|`524288`|`156.36ns ± 2.31ns`|`263.93ns`|`139.85ns - 264.76ns`|`156.36ns ± 2.42ns`|`291.03ns`|`132.86ns - 291.69ns`|
|two object buckets|`524288`|`205.3ns ± 717.73ps`|`233.43ns`|`195.11ns - 239.55ns`|`205.3ns ± 2.4ns`|`291.94ns`|`163.73ns - 408.83ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`16.91ns ± 287.22ps`|`27.68ns`|`13.51ns - 30.1ns`|`16.91ns ± 15.35ns`|`311.58ns`|`132.62ns - 512.25ns`|
|two map buckets|`524288`|`17.1ns ± 256.07ps`|`25.76ns`|`13.16ns - 26.44ns`|`17.1ns ± 13.1ns`|`228.97ns`|`137.46ns - 263.89ns`|
|map|`524288`|`17.19ns ± 243.24ps`|`24.45ns`|`13.85ns - 25.38ns`|`17.19ns ± 12.63ns`|`246.07ns`|`125.76ns - 272.54ns`|
|two object buckets|`524288`|`62.13ns ± 465.25ps`|`79.73ns`|`47.17ns - 85.75ns`|`62.13ns ± 11.7ns`|`368.36ns`|`156.6ns - 514.9ns`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`26.17ns ± 319.86ps`|`42.79ns`|`22.46ns - 44.15ns`|`26.17ns ± 13.84ns`|`275ns`|`143.05ns - 362.34ns`|
|linked list map|`524288`|`64.67ns ± 581.35ps`|`90.55ns`|`58.13ns - 90.83ns`|`64.67ns ± 13.49ns`|`426.52ns`|`163.57ns - 613.9ns`|
|two object buckets|`524288`|`98.77ns ± 856.32ps`|`142.35ns`|`87.79ns - 143.72ns`|`98.77ns ± 10.12ns`|`298.3ns`|`179.3ns - 320.83ns`|
|map|`524288`|`128.86ns ± 2.1ns`|`230.48ns`|`113.67ns - 230.69ns`|`128.86ns ± 6.75ns`|`362.95ns`|`148.19ns - 458.2ns`|### capacity 4096

#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`48.13ns ± 382.94ps`|`58.42ns`|`42.59ns - 69.37ns`|`48.13ns ± 20.28ns`|`445.35ns`|`213.89ns - 824.32ns`|
|linked list map|`524288`|`115.35ns ± 3.02ns`|`215.77ns`|`83.19ns - 254.01ns`|`115.35ns ± 24.19ns`|`870.76ns`|`278.07ns - 1.59μs`|
|two object buckets|`524288`|`132.19ns ± 2.43ns`|`209.22ns`|`108.69ns - 211.22ns`|`132.19ns ± 14.25ns`|`559.94ns`|`219.51ns - 744.97ns`|
|map|`524288`|`619.25ns ± 6.28ns`|`712.88ns`|`595.28ns - 1.4μs`|`619.25ns ± 34.86ns`|`369.2ns`|`182.14ns - 406.12ns`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`15.52ns ± 316.58ps`|`32.21ns`|`9.65ns - 40.73ns`|`15.52ns ± 29.05ns`|`649.55ns`|`254.6ns - 771.38ns`|
|linked list map|`524288`|`27.68ns ± 709.27ps`|`46.46ns`|`20.36ns - 100.67ns`|`27.68ns ± 31.88ns`|`1.01μs`|`276.32ns - 1.33μs`|
|map|`524288`|`40.43ns ± 494.56ps`|`65.73ns`|`34.65ns - 74.69ns`|`40.43ns ± 30.45ns`|`552.37ns`|`315.79ns - 622.12ns`|
|two object buckets|`524288`|`48.19ns ± 375.59ps`|`69.34ns`|`40.76ns - 73.27ns`|`48.19ns ± 29.79ns`|`486.11ns`|`296.12ns - 1.37μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`26.83ns ± 564.92ps`|`52.97ns`|`18.51ns - 67.12ns`|`26.83ns ± 43.41ns`|`726.74ns`|`387.27ns - 1.81μs`|
|linked list map|`524288`|`29.17ns ± 772.8ps`|`69.32ns`|`24.09ns - 92.17ns`|`29.17ns ± 44.35ns`|`956.63ns`|`390.16ns - 1.3μs`|
|map|`524288`|`36.23ns ± 220.81ps`|`43.05ns`|`30.48ns - 44.58ns`|`36.23ns ± 33.97ns`|`617.67ns`|`322.67ns - 848.84ns`|
|two object buckets|`524288`|`141.4ns ± 1.23ns`|`176.41ns`|`119.02ns - 230.47ns`|`141.4ns ± 35.31ns`|`802.02ns`|`418.19ns - 964.42ns`|## web apis
### Response

#### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`246.59ns ± 2.75ns`|`381.96ns`|`213.09ns - 591.04ns`|
|header pairs|`1048576`|`274.5ns ± 2.7ns`|`393.61ns`|`242.06ns - 557.93ns`|
|new Headers().set()|`1048576`|`294.74ns ± 3.92ns`|`458.63ns`|`226.11ns - 688.34ns`|
|new Headers().append()|`1048576`|`306.47ns ± 4.99ns`|`633.5ns`|`231.29ns - 779.13ns`|
|new Headers(pairs)|`1048576`|`363.82ns ± 3.21ns`|`493.02ns`|`306.45ns - 825.24ns`|
|new Headers(record)|`1048576`|`406.51ns ± 5.14ns`|`633.79ns`|`286.96ns - 991.95ns`|
