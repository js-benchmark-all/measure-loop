
* runtime: node 27.0.0-alpha.0.0.0 (x64-linux)## cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`430.61ps ± 16.45ps`|`344.97ps`|`315.43ps - 33.16ns`|
## string
### filter
#### is alpha numeric
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`55.11ns ± 1.29ns`|`75.76ns`|`17.63ns - 80.96ns`|
|regex|`524288`|`135.14ns ± 2.55ns`|`199.98ns`|`82.68ns - 202.97ns`|
|fp|`524288`|`328.02ns ± 4.93ns`|`389.74ns`|`225.42ns - 391.35ns`|
#### is number or . or ,
|case|runs|mean|p99|range|
|-|-|-|-|-|
|fp & procedural filter|`524288`|`209.55ns ± 10.35ns`|`563.27ns`|`151.31ns - 564.38ns`|
|regex|`524288`|`224.19ns ± 4ns`|`296.29ns`|`158.38ns - 299.32ns`|
|fp|`524288`|`529.03ns ± 5.24ns`|`590.57ns`|`452.94ns - 607.31ns`|
## object
### access
#### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`3.24ns ± 296.64ps`|`29.2ns`|`1.81ns - 29.44ns`|
|polymorphic array|`524288`|`5.19ns ± 686.39ps`|`35.91ns`|`2.28ns - 40ns`|
|polymorphic object|`524288`|`6.19ns ± 643.83ps`|`30.99ns`|`3.86ns - 35.99ns`|
|monomorphic object|`524288`|`17.05ns ± 1.18ns`|`36.12ns`|`2.18ns - 36.84ns`|
|megamorphic object|`524288`|`31.35ns ± 1.16ns`|`55.55ns`|`21.43ns - 56.41ns`|
#### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`7.3ns ± 590.45ps`|`27.57ns`|`2.41ns - 29.79ns`|
|monomorphic object|`524288`|`10.23ns ± 639.65ps`|`26.74ns`|`4.1ns - 32.36ns`|
#### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`7.83ns ± 251.81ps`|`24.02ns`|`5.49ns - 29.64ns`|
|WeakMap store|`524288`|`13.71ns ± 382.14ps`|`26.19ns`|`8.6ns - 38.89ns`|
|prototype chain (create with prototype)|`524288`|`15.29ns ± 230.7ps`|`26.06ns`|`10.53ns - 31.41ns`|
|prototype chain (override prototype)|`524288`|`18.86ns ± 603.14ps`|`35.38ns`|`11.72ns - 46.96ns`|
### init
#### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`158.11ns ± 1.16ns`|`247.72ns`|`144.84ns - 252.92ns`|
|Object.create(null)|`524288`|`298.49ns ± 2.76ns`|`410.13ns`|`277.68ns - 490.41ns`|
|object literal (computed properties)|`524288`|`1.03μs ± 6.19ns`|`1.17μs`|`975.52ns - 1.53μs`|
|function constructor (freezed proto)|`524288`|`1.05μs ± 4.81ns`|`1.15μs`|`997.06ns - 1.16μs`|
|function constructor|`524288`|`1.07μs ± 7.71ns`|`1.49μs`|`995.49ns - 1.5μs`|
|object literal|`524288`|`1.19μs ± 14.81ns`|`1.76μs`|`1.03μs - 1.77μs`|
#### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`12.77ns ± 2.28ns`|`128.49ns`|`2.18ns - 184.92ns`|
|constructor|`524288`|`23.56ns ± 3.55ns`|`219.78ns`|`1.82ns - 223.09ns`|
|set prototype|`524288`|`25.5ns ± 2.56ns`|`134.02ns`|`2.11ns - 149.74ns`|
|Object.create()|`524288`|`44.09ns ± 2.55ns`|`134.88ns`|`2.12ns - 141.38ns`|
|set __proto__|`524288`|`266.77ns ± 5.12ns`|`370.1ns`|`204.03ns - 387.51ns`|
|Object.setPrototypeOf()|`524288`|`273.37ns ± 4.93ns`|`429.66ns`|`211ns - 434.93ns`|
|object spread|`524288`|`597.42ns ± 2.01ns`|`705.86ns`|`581.09ns - 786.77ns`|
## array
### unique items
#### size 8
##### 1 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`75.33ns ± 842.09ps`|`103.47ns`|`63.69ns - 232.99ns`|
|Set|`1048576`|`172.45ns ± 1.43ns`|`298.61ns`|`135.7ns - 306.27ns`|
|Set direct assign|`1048576`|`211.89ns ± 2.85ns`|`335.83ns`|`170.1ns - 340.74ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`72.66ns ± 444.61ps`|`93.55ns`|`34.45ns - 101.11ns`|
|Set|`1048576`|`106.89ns ± 595.5ps`|`147.08ns`|`93.86ns - 153.78ns`|
|Set direct assign|`1048576`|`122.88ns ± 687.66ps`|`166.93ns`|`108.36ns - 195.06ns`|
##### 2 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`148.93ns ± 1.19ns`|`218.84ns`|`127.27ns - 221.1ns`|
|Set direct assign|`1048576`|`207.12ns ± 2.09ns`|`338.52ns`|`182.41ns - 348.17ns`|
|Set|`1048576`|`218.98ns ± 3.1ns`|`348.5ns`|`141.37ns - 398.46ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`108.18ns ± 461.78ps`|`130.23ns`|`85.43ns - 157ns`|
|Set direct assign|`1048576`|`132.76ns ± 1.11ns`|`189.88ns`|`85.53ns - 202.62ns`|
|Array.includes()|`1048576`|`157.3ns ± 1.69ns`|`226.04ns`|`121.29ns - 232.81ns`|
##### 4 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`133.68ns ± 1.55ns`|`216.46ns`|`111.09ns - 228.13ns`|
|Set|`1048576`|`211.79ns ± 627.43ps`|`247.99ns`|`172.86ns - 279.58ns`|
|Set direct assign|`1048576`|`274.7ns ± 4.85ns`|`400.9ns`|`201.9ns - 408.93ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`115.18ns ± 526.61ps`|`140.02ns`|`104.37ns - 182.01ns`|
|Set direct assign|`1048576`|`131.14ns ± 646.19ps`|`171.36ns`|`118.2ns - 215.61ns`|
|Array.includes()|`1048576`|`271.13ns ± 3.45ns`|`410.43ns`|`226.77ns - 447.03ns`|
##### 8 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`334.7ns ± 3.41ns`|`435.29ns`|`287.06ns - 456.81ns`|
|Set|`1048576`|`403.22ns ± 5.7ns`|`584.5ns`|`297.3ns - 589.02ns`|
|Array.includes()|`1048576`|`496.79ns ± 6.42ns`|`761.18ns`|`429.6ns - 771.38ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`150.43ns ± 1.73ns`|`242.31ns`|`122.2ns - 333.03ns`|
|Set|`1048576`|`187.55ns ± 559.5ps`|`215.29ns`|`166.19ns - 269.75ns`|
|Array.includes()|`1048576`|`504.95ns ± 6.69ns`|`762.15ns`|`436.15ns - 777.93ns`|
#### size 16
##### 2 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`153.35ns ± 2.39ns`|`249.12ns`|`129.81ns - 278.88ns`|
|Set|`524288`|`237.11ns ± 3.18ns`|`421.25ns`|`211.49ns - 427.96ns`|
|Set direct assign|`524288`|`312.45ns ± 4.95ns`|`419.15ns`|`266.39ns - 425.16ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`189.02ns ± 2.78ns`|`262.8ns`|`142.6ns - 264.78ns`|
|Set direct assign|`524288`|`215.45ns ± 3.41ns`|`310.77ns`|`169.25ns - 313.33ns`|
|Array.includes()|`524288`|`297.48ns ± 6.03ns`|`418.63ns`|`228.91ns - 433.61ns`|
##### 4 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`322.09ns ± 7.47ns`|`516.22ns`|`237.86ns - 526.57ns`|
|Set direct assign|`524288`|`338.54ns ± 4.66ns`|`436.78ns`|`296.41ns - 442.5ns`|
|Array.includes()|`524288`|`492.64ns ± 3.64ns`|`722.04ns`|`466.03ns - 802.06ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`198.63ns ± 3.61ns`|`301.47ns`|`146.6ns - 310.1ns`|
|Set direct assign|`524288`|`238.46ns ± 4.92ns`|`317.89ns`|`173.95ns - 332.69ns`|
|Array.includes()|`524288`|`485.88ns ± 1.42ns`|`530.56ns`|`471.36ns - 647.94ns`|
##### 8 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`306.27ns ± 3.16ns`|`547.52ns`|`288.83ns - 585.86ns`|
|Set direct assign|`524288`|`401.2ns ± 5.2ns`|`503.73ns`|`357.27ns - 607.86ns`|
|Set|`524288`|`463.79ns ± 8.54ns`|`658.66ns`|`366.99ns - 660.24ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`242.63ns ± 4.6ns`|`359.07ns`|`189.69ns - 387.12ns`|
|Set|`524288`|`244.54ns ± 1.94ns`|`409.54ns`|`208.52ns - 414.95ns`|
|Array.includes()|`524288`|`1.06μs ± 14.6ns`|`1.3μs`|`937.6ns - 1.76μs`|
##### 16 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`376.31ns ± 808.88ps`|`400.39ns`|`357.29ns - 446.23ns`|
|Set direct assign|`524288`|`625.78ns ± 5.26ns`|`728.2ns`|`574.25ns - 738.9ns`|
|Set|`524288`|`680.4ns ± 8.48ns`|`854.71ns`|`613.71ns - 969.83ns`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`366.53ns ± 4.41ns`|`463.66ns`|`326.99ns - 518.74ns`|
|Set|`524288`|`411.78ns ± 7.56ns`|`588.36ns`|`317.57ns - 633.16ns`|
|Array.includes()|`524288`|`992.91ns ± 13.51ns`|`1.23μs`|`877.82ns - 1.24μs`|
#### size 64
##### 8 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`800.54ns ± 11.4ns`|`928.3ns`|`745.75ns - 928.3ns`|
|Set|`131072`|`821.75ns ± 18.73ns`|`988.83ns`|`741.21ns - 988.83ns`|
|Array.includes()|`131072`|`3.62μs ± 29.86ns`|`4.03μs`|`3.49μs - 4.03μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`641.25ns ± 8.09ns`|`721.21ns`|`603.24ns - 721.21ns`|
|Set|`131072`|`660.38ns ± 15.77ns`|`800.25ns`|`594.5ns - 800.25ns`|
|Array.includes()|`131072`|`3.6μs ± 27.54ns`|`3.86μs`|`3.49μs - 3.86μs`|
##### 16 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.01μs ± 14.88ns`|`1.21μs`|`961.62ns - 1.21μs`|
|Set direct assign|`131072`|`1.04μs ± 12.99ns`|`1.21μs`|`966.68ns - 1.21μs`|
|Array.includes()|`131072`|`4.13μs ± 32.67ns`|`4.42μs`|`3.96μs - 4.42μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`772.55ns ± 9.75ns`|`875.84ns`|`721.6ns - 875.84ns`|
|Set|`131072`|`794.87ns ± 16.66ns`|`935.78ns`|`710.91ns - 935.78ns`|
|Array.includes()|`131072`|`4.19μs ± 36.22ns`|`4.48μs`|`3.96μs - 4.48μs`|
##### 32 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.38μs ± 9.31ns`|`1.53μs`|`1.35μs - 1.53μs`|
|Set|`131072`|`1.41μs ± 15.66ns`|`1.6μs`|`1.36μs - 1.6μs`|
|Array.includes()|`131072`|`6.03μs ± 31.84ns`|`6.28μs`|`5.82μs - 6.28μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`933.31ns ± 9.57ns`|`1.03μs`|`889.44ns - 1.03μs`|
|Set|`131072`|`968ns ± 17.32ns`|`1.11μs`|`886.19ns - 1.11μs`|
|Array.includes()|`131072`|`5.97μs ± 30.36ns`|`6.28μs`|`5.82μs - 6.28μs`|
##### 64 unique items
###### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.21μs ± 11.24ns`|`2.32μs`|`2.13μs - 2.32μs`|
|Set|`131072`|`2.28μs ± 20.42ns`|`2.44μs`|`2.16μs - 2.44μs`|
|Array.includes()|`131072`|`5.94μs ± 28.39ns`|`6.19μs`|`5.78μs - 6.19μs`|
###### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.28μs ± 9.56ns`|`1.36μs`|`1.23μs - 1.36μs`|
|Set|`131072`|`1.32μs ± 17.46ns`|`1.49μs`|`1.23μs - 1.49μs`|
|Array.includes()|`131072`|`16.52μs ± 31.63ns`|`16.77μs`|`16.28μs - 16.77μs`|
## coroutine
### overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`139.34ns ± 1.2ns`|`194.68ns`|`124.31ns - 197.84ns`|
|await non-promise|`524288`|`147.25ns ± 831.93ps`|`180.68ns`|`130.27ns - 227.07ns`|
|generator|`524288`|`165.19ns ± 644.82ps`|`193.24ns`|`152.25ns - 198.47ns`|
|async generator|`524288`|`650.48ns ± 16.07ns`|`1.37μs`|`584.15ns - 2.32μs`|
### async iterable
#### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`951.02ns ± 25.81ns`|`1.41μs`|`876.07ns - 1.41μs`|
|generator|`131072`|`2.1μs ± 93.21ns`|`3.78μs`|`1.89μs - 3.78μs`|
## lru
### capacity 8
#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`180.76ns ± 2.33ns`|`270.83ns`|`148.26ns - 293.31ns`|`180.76ns ± 92.23ns`|`1.34μs`|`1.14μs - 1.38μs`|
|map|`524288`|`210.56ns ± 2.06ns`|`256.89ns`|`180.79ns - 286.22ns`|`210.56ns ± 89.57ns`|`1.3μs`|`1.13μs - 1.33μs`|
|linked list map|`524288`|`277.2ns ± 4.3ns`|`408.71ns`|`215.53ns - 434.21ns`|`277.2ns ± 84.76ns`|`1.4μs`|`1.15μs - 1.41μs`|
|two object buckets|`524288`|`295.4ns ± 2.41ns`|`428.74ns`|`265.34ns - 443.98ns`|`295.4ns ± 80.6ns`|`1.28μs`|`1.13μs - 1.29μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`23.52ns ± 413.98ps`|`33.99ns`|`17.16ns - 62.39ns`|`23.52ns ± 127.07ns`|`1.62μs`|`1.24μs - 1.7μs`|
|linked list map|`524288`|`31.68ns ± 474.74ps`|`60.44ns`|`22.8ns - 67.43ns`|`31.68ns ± 117.05ns`|`1.6μs`|`1.24μs - 1.62μs`|
|two map buckets|`524288`|`36.33ns ± 459.14ps`|`58.03ns`|`29.82ns - 68.11ns`|`36.33ns ± 108.62ns`|`1.4μs`|`1.18μs - 1.42μs`|
|two object buckets|`524288`|`47.29ns ± 517.2ps`|`83.35ns`|`35.82ns - 91.95ns`|`47.29ns ± 107.17ns`|`1.38μs`|`1.07μs - 1.41μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`64.68ns ± 403.38ps`|`86.82ns`|`61.77ns - 92.97ns`|`64.68ns ± 104.32ns`|`1.35μs`|`1.17μs - 1.41μs`|
|two object buckets|`524288`|`101.14ns ± 463.23ps`|`119.42ns`|`92.17ns - 119.75ns`|`101.14ns ± 98.7ns`|`1.3μs`|`1.14μs - 1.32μs`|
|map|`524288`|`101.27ns ± 863.26ps`|`142.58ns`|`82.19ns - 145.93ns`|`101.27ns ± 101.73ns`|`1.38μs`|`1.12μs - 1.39μs`|
|linked list map|`524288`|`132.2ns ± 548.03ps`|`151.1ns`|`96.67ns - 155.71ns`|`132.2ns ± 100.76ns`|`1.38μs`|`1.18μs - 1.38μs`|
### capacity 64
#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`171.19ns ± 853.86ps`|`190.93ns`|`150.64ns - 194.12ns`|`171.19ns ± 93.16ns`|`1.32μs`|`1.15μs - 1.4μs`|
|linked list map|`524288`|`236.44ns ± 1.77ns`|`277.59ns`|`204.47ns - 285.01ns`|`236.44ns ± 87.41ns`|`1.3μs`|`1.15μs - 1.31μs`|
|map|`524288`|`253.82ns ± 4.06ns`|`403.64ns`|`206.36ns - 404.47ns`|`253.82ns ± 86.02ns`|`1.34μs`|`1.14μs - 1.37μs`|
|two object buckets|`524288`|`282.73ns ± 3.39ns`|`431.7ns`|`249.15ns - 433.52ns`|`282.73ns ± 84.81ns`|`1.48μs`|`1.15μs - 1.6μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`25.97ns ± 514.28ps`|`64.22ns`|`17.07ns - 69.63ns`|`25.97ns ± 124.68ns`|`1.57μs`|`1.34μs - 1.66μs`|
|linked list map|`524288`|`34.21ns ± 552.08ps`|`67.8ns`|`24.54ns - 69.42ns`|`34.21ns ± 119.11ns`|`1.47μs`|`1.26μs - 1.51μs`|
|two map buckets|`524288`|`44.06ns ± 556.24ps`|`79.01ns`|`34.61ns - 83.83ns`|`44.06ns ± 108.05ns`|`1.38μs`|`1.18μs - 1.43μs`|
|two object buckets|`524288`|`53.01ns ± 508.14ps`|`90.27ns`|`45.5ns - 94.48ns`|`53.01ns ± 106.84ns`|`1.33μs`|`1.18μs - 1.36μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`66.84ns ± 365.44ps`|`86.03ns`|`63.63ns - 94.17ns`|`66.84ns ± 105.82ns`|`1.47μs`|`1.19μs - 1.61μs`|
|two object buckets|`524288`|`94.22ns ± 428.11ps`|`113.22ns`|`86.85ns - 116.29ns`|`94.22ns ± 104.01ns`|`1.54μs`|`1.18μs - 1.55μs`|
|map|`524288`|`124.53ns ± 1.05ns`|`174.1ns`|`112.07ns - 174.7ns`|`124.53ns ± 99.37ns`|`1.34μs`|`1.13μs - 1.84μs`|
|linked list map|`524288`|`131.93ns ± 773.42ps`|`168.95ns`|`119.79ns - 188.4ns`|`131.93ns ± 100.18ns`|`1.35μs`|`1.17μs - 1.5μs`|
### capacity 512
#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`181.57ns ± 1.68ns`|`267.57ns`|`156.5ns - 272.79ns`|`181.57ns ± 96.6ns`|`1.37μs`|`1.19μs - 1.4μs`|
|linked list map|`524288`|`252.69ns ± 3.41ns`|`365.12ns`|`216.61ns - 370.92ns`|`252.69ns ± 91.06ns`|`1.37μs`|`1.19μs - 1.41μs`|
|two object buckets|`524288`|`300.94ns ± 3.63ns`|`441.44ns`|`256.46ns - 454.5ns`|`300.94ns ± 91.81ns`|`1.64μs`|`1.21μs - 1.73μs`|
|map|`524288`|`411.22ns ± 4.17ns`|`612.56ns`|`377.48ns - 630.44ns`|`411.22ns ± 77.89ns`|`1.38μs`|`1.2μs - 1.39μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`35.72ns ± 515.54ps`|`76.88ns`|`32.69ns - 79.77ns`|`35.72ns ± 122.59ns`|`1.66μs`|`1.22μs - 1.72μs`|
|linked list map|`524288`|`38.91ns ± 464.72ps`|`74.72ns`|`28.47ns - 76.43ns`|`38.91ns ± 125.92ns`|`1.59μs`|`1.23μs - 1.59μs`|
|two map buckets|`524288`|`54.74ns ± 755.4ps`|`96.34ns`|`48.24ns - 98.42ns`|`54.74ns ± 111.26ns`|`1.41μs`|`1.23μs - 1.42μs`|
|two object buckets|`524288`|`62.9ns ± 560.72ps`|`96.51ns`|`56.8ns - 108.47ns`|`62.9ns ± 109.51ns`|`1.41μs`|`1.22μs - 1.51μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.67ns ± 469.04ps`|`97.53ns`|`61.75ns - 102.6ns`|`65.67ns ± 111.94ns`|`1.45μs`|`1.25μs - 1.47μs`|
|two object buckets|`524288`|`93.15ns ± 456.43ps`|`109.63ns`|`86.3ns - 128.37ns`|`93.15ns ± 106.44ns`|`1.41μs`|`1.21μs - 1.49μs`|
|linked list map|`524288`|`135.18ns ± 512.83ps`|`157.22ns`|`125.98ns - 162.23ns`|`135.18ns ± 104.16ns`|`1.42μs`|`1.21μs - 1.43μs`|
|map|`524288`|`287.18ns ± 1.4ns`|`371.69ns`|`277.17ns - 414.91ns`|`287.18ns ± 88.04ns`|`1.4μs`|`1.17μs - 1.4μs`|
### capacity 4096
#### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`199.85ns ± 2.46ns`|`282.6ns`|`159.7ns - 287.49ns`|`199.85ns ± 101.33ns`|`1.62μs`|`1.24μs - 1.64μs`|
|two object buckets|`524288`|`325.29ns ± 3.08ns`|`437.92ns`|`290.58ns - 466.4ns`|`325.29ns ± 101.27ns`|`1.61μs`|`1.35μs - 1.76μs`|
|linked list map|`524288`|`325.78ns ± 4.05ns`|`493.79ns`|`282.79ns - 528.91ns`|`325.78ns ± 97.61ns`|`1.54μs`|`1.36μs - 1.54μs`|
|map|`524288`|`1.86μs ± 4.48ns`|`2.02μs`|`1.74μs - 2.03μs`|`1.86μs ± 42.72ns`|`1.46μs`|`1.29μs - 1.48μs`|
#### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`27.22ns ± 722.33ps`|`65.92ns`|`23.87ns - 69.17ns`|`27.22ns ± 140.13ns`|`1.88μs`|`1.45μs - 1.98μs`|
|two map buckets|`524288`|`29.94ns ± 876.81ps`|`70.82ns`|`25.67ns - 74.57ns`|`29.94ns ± 140.86ns`|`1.78μs`|`1.5μs - 1.79μs`|
|linked list map|`524288`|`57.5ns ± 516.14ps`|`88.78ns`|`52.57ns - 95.78ns`|`57.5ns ± 129.21ns`|`1.72μs`|`1.41μs - 2.25μs`|
|map|`524288`|`131.92ns ± 558.21ps`|`153.17ns`|`122.46ns - 173.22ns`|`131.92ns ± 121.49ns`|`1.69μs`|`1.39μs - 1.76μs`|
#### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`45.75ns ± 349.3ps`|`54.61ns`|`42.95ns - 78.91ns`|`45.75ns ± 162.28ns`|`2.1μs`|`1.72μs - 2.34μs`|
|two object buckets|`524288`|`57.55ns ± 671.02ps`|`92.48ns`|`52.72ns - 105.82ns`|`57.55ns ± 148.77ns`|`1.98μs`|`1.55μs - 2.07μs`|
|linked list map|`524288`|`60.67ns ± 559.31ps`|`92.87ns`|`38.36ns - 101.06ns`|`60.67ns ± 153.55ns`|`1.92μs`|`1.61μs - 2.02μs`|
|map|`524288`|`128.31ns ± 662.11ps`|`161.26ns`|`115.84ns - 168.3ns`|`128.31ns ± 133.04ns`|`1.81μs`|`1.37μs - 1.84μs`|
## web apis
### Response
#### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`1.1μs ± 6.25ns`|`1.31μs`|`1.06μs - 2.51μs`|
|header pairs|`1048576`|`1.39μs ± 7.17ns`|`1.58μs`|`1.34μs - 2.65μs`|
|new Headers().append()|`1048576`|`1.5μs ± 12.47ns`|`2.09μs`|`1.43μs - 3.63μs`|
|new Headers().set()|`1048576`|`1.51μs ± 10.73ns`|`2.18μs`|`1.43μs - 2.94μs`|
|new Headers(record)|`1048576`|`1.71μs ± 6.63ns`|`2μs`|`1.66μs - 2.93μs`|
|new Headers(pairs)|`1048576`|`1.8μs ± 8.35ns`|`2.09μs`|`1.74μs - 3.54μs`|

