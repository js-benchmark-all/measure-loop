# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`418.88ps ± 11.31ps`|`325.2ps`|`317.87ps - 28.24ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic object|`524288`|`3.13ns ± 279.66ps`|`27.89ns`|`2.3ns - 28.38ns`|
|polymorphic array|`524288`|`3.64ns ± 393.03ps`|`29.27ns`|`2.32ns - 36.18ns`|
|polymorphic object|`524288`|`6.24ns ± 673.85ps`|`34.52ns`|`3.23ns - 35.26ns`|
|monomorphic array|`524288`|`6.57ns ± 841.74ps`|`31.66ns`|`1.97ns - 39.86ns`|
|megamorphic object|`524288`|`24.84ns ± 719.82ps`|`56.38ns`|`11.23ns - 57.47ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`6.01ns ± 547.2ps`|`30.5ns`|`1.93ns - 31.62ns`|
|monomorphic object|`524288`|`7.01ns ± 441.61ps`|`26.52ns`|`5.04ns - 31.73ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`9.31ns ± 287.41ps`|`23.67ns`|`7.93ns - 31.79ns`|
|prototype chain (override prototype)|`524288`|`12.72ns ± 176.38ps`|`26.53ns`|`11.24ns - 27.95ns`|
|prototype chain (create with prototype)|`524288`|`14.82ns ± 332.28ps`|`33.46ns`|`10.22ns - 51.18ns`|
|WeakMap store|`524288`|`17.19ns ± 306.7ps`|`25.27ns`|`11.78ns - 31.82ns`|
## init
### static props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function without constructor|`1048576`|`12.97ns ± 250.15ps`|`37.67ns`|`6.76ns - 47.19ns`|
|class with constructor|`1048576`|`13.51ns ± 309ps`|`38.42ns`|`6.98ns - 43.46ns`|
|function constructor|`1048576`|`13.57ns ± 307.65ps`|`37.82ns`|`11.81ns - 48.42ns`|
|class without constructor|`1048576`|`15.41ns ± 481.72ps`|`43.68ns`|`10.86ns - 53.64ns`|
|class with default initializer, without constructor|`1048576`|`15.73ns ± 527.68ps`|`46.49ns`|`11.82ns - 52.91ns`|
|Object.create()|`1048576`|`19.24ns ± 683.29ps`|`49.48ns`|`12.42ns - 53.96ns`|
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`158.65ns ± 1.74ns`|`239.84ns`|`130.96ns - 248.87ns`|
|Object.create(null)|`524288`|`252.78ns ± 1.02ns`|`290.57ns`|`240.25ns - 291.59ns`|
|function constructor (freezed proto)|`524288`|`980.21ns ± 5.23ns`|`1.23μs`|`937.96ns - 1.23μs`|
|function constructor|`524288`|`1.05μs ± 5.78ns`|`1.21μs`|`980.93ns - 1.22μs`|
|object literal (computed properties)|`524288`|`1.06μs ± 5.79ns`|`1.2μs`|`979.5ns - 1.21μs`|
|object literal|`524288`|`1.07μs ± 4.79ns`|`1.21μs`|`1μs - 1.22μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|constructor|`524288`|`5.79ns ± 1.87ns`|`55.76ns`|`1.85ns - 231.45ns`|
|function constructor|`524288`|`19.26ns ± 2.85ns`|`158.16ns`|`1.92ns - 158.63ns`|
|Object.create()|`524288`|`22.49ns ± 3.33ns`|`170.45ns`|`1.92ns - 180.98ns`|
|object spread|`524288`|`100.38ns ± 1.13ns`|`140.64ns`|`57.51ns - 176.4ns`|
|Object.setPrototypeOf()|`524288`|`234.72ns ± 3.35ns`|`432.29ns`|`212.21ns - 434.64ns`|
|set __proto__|`524288`|`280.62ns ± 5.73ns`|`434.7ns`|`183.6ns - 470.3ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`76.23ns ± 679.86ps`|`114.73ns`|`66.22ns - 145.67ns`|
|Set|`1048576`|`173.44ns ± 1.29ns`|`287.35ns`|`150.19ns - 304.19ns`|
|Set direct assign|`1048576`|`184.13ns ± 884.55ps`|`222.36ns`|`170.05ns - 327.62ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`81.95ns ± 1.05ns`|`148.09ns`|`60.34ns - 152.14ns`|
|Set|`1048576`|`107.65ns ± 652.7ps`|`148.52ns`|`92.36ns - 156.68ns`|
|Set direct assign|`1048576`|`121.84ns ± 741.87ps`|`181.85ns`|`107.73ns - 196.76ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`102.74ns ± 860.56ps`|`151.13ns`|`88.32ns - 198.02ns`|
|Set|`1048576`|`184.23ns ± 822.7ps`|`217.15ns`|`170.8ns - 316.25ns`|
|Set direct assign|`1048576`|`195.83ns ± 607.75ps`|`227.81ns`|`183.37ns - 259.51ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`109.38ns ± 630.51ps`|`152.31ns`|`95.05ns - 160.9ns`|
|Set direct assign|`1048576`|`122.99ns ± 504.64ps`|`147.32ns`|`94.76ns - 152.8ns`|
|Array.includes()|`1048576`|`170.51ns ± 2.06ns`|`287.84ns`|`135.86ns - 314.66ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`131.79ns ± 1.52ns`|`206.79ns`|`85.63ns - 274.42ns`|
|Set|`1048576`|`217.99ns ± 1.4ns`|`295.82ns`|`183.95ns - 387.99ns`|
|Set direct assign|`1048576`|`227.91ns ± 1.28ns`|`336.73ns`|`211.76ns - 408.37ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`115.62ns ± 560.73ps`|`141.78ns`|`97.55ns - 171.32ns`|
|Set direct assign|`1048576`|`128.64ns ± 684.34ps`|`158.99ns`|`117.54ns - 227.95ns`|
|Array.includes()|`1048576`|`245.39ns ± 634.42ps`|`286.39ns`|`209.81ns - 299.23ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`280.92ns ± 1.85ns`|`413.01ns`|`258.78ns - 547.84ns`|
|Set|`1048576`|`340.31ns ± 588.65ps`|`370.2ns`|`328.01ns - 385.57ns`|
|Array.includes()|`1048576`|`447.34ns ± 724.91ps`|`492.15ns`|`433.51ns - 510.35ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`138.47ns ± 585.73ps`|`170.07ns`|`126.94ns - 219.46ns`|
|Set|`1048576`|`189.6ns ± 843.17ps`|`224.01ns`|`171.63ns - 320.67ns`|
|Array.includes()|`1048576`|`451.48ns ± 2.19ns`|`507.34ns`|`433.8ns - 793.14ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`159.6ns ± 2.72ns`|`251ns`|`131.69ns - 258.06ns`|
|Set|`524288`|`230.36ns ± 1.88ns`|`339.02ns`|`188.78ns - 405.36ns`|
|Set direct assign|`524288`|`263.55ns ± 2.83ns`|`405.64ns`|`244.59ns - 462.32ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`158.44ns ± 981.95ps`|`190.1ns`|`141.75ns - 246.61ns`|
|Set direct assign|`524288`|`184.49ns ± 1.86ns`|`298.28ns`|`167.64ns - 298.53ns`|
|Array.includes()|`524288`|`245.73ns ± 1.21ns`|`295.73ns`|`231.91ns - 339.43ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`263.67ns ± 1.84ns`|`285.57ns`|`250.35ns - 482.1ns`|
|Set direct assign|`524288`|`285.55ns ± 2.27ns`|`424.97ns`|`262.61ns - 479.5ns`|
|Array.includes()|`524288`|`527.98ns ± 9.19ns`|`926.62ns`|`460.68ns - 1.06μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`190ns ± 1.55ns`|`283.28ns`|`175.84ns - 293.3ns`|
|Set|`524288`|`195.03ns ± 2.8ns`|`270.97ns`|`164.7ns - 297.97ns`|
|Array.includes()|`524288`|`501.55ns ± 4.09ns`|`791.46ns`|`482.75ns - 912.3ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`314.85ns ± 4.57ns`|`587.79ns`|`286.84ns - 589.66ns`|
|Set direct assign|`524288`|`348.46ns ± 4.59ns`|`647.58ns`|`323.47ns - 676.32ns`|
|Set|`524288`|`397.58ns ± 2.48ns`|`606.07ns`|`376ns - 610.68ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`202.26ns ± 1.64ns`|`303.3ns`|`183.74ns - 341.61ns`|
|Set|`524288`|`255.25ns ± 3.89ns`|`412.24ns`|`220.83ns - 431.24ns`|
|Array.includes()|`524288`|`972.32ns ± 7.39ns`|`1.25μs`|`950.61ns - 1.86μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`548.7ns ± 5.17ns`|`948.54ns`|`527.89ns - 1.05μs`|
|Set|`524288`|`595.68ns ± 3.07ns`|`813.84ns`|`573.51ns - 843.75ns`|
|Array.includes()|`524288`|`890.16ns ± 6.92ns`|`1.22μs`|`864.17ns - 1.68μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`307.2ns ± 2.31ns`|`428.16ns`|`289.52ns - 549.42ns`|
|Set|`524288`|`351.19ns ± 2.85ns`|`524.1ns`|`331.74ns - 542.5ns`|
|Array.includes()|`524288`|`896.77ns ± 9.52ns`|`1.63μs`|`863.6ns - 1.67μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`701.01ns ± 5.21ns`|`835.73ns`|`682.97ns - 835.73ns`|
|Set|`131072`|`734.21ns ± 20.98ns`|`1.36μs`|`687.44ns - 1.36μs`|
|Array.includes()|`131072`|`3.96μs ± 36.89ns`|`4.34μs`|`3.62μs - 4.34μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`554.09ns ± 2.69ns`|`613.57ns`|`541.69ns - 613.57ns`|
|Set|`131072`|`579.62ns ± 11.35ns`|`844.23ns`|`535.23ns - 844.23ns`|
|Array.includes()|`131072`|`4.07μs ± 33.69ns`|`4.41μs`|`3.61μs - 4.41μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`935.2ns ± 8.54ns`|`1.13μs`|`904.08ns - 1.13μs`|
|Set direct assign|`131072`|`1.04μs ± 12.61ns`|`1.17μs`|`938.44ns - 1.17μs`|
|Array.includes()|`131072`|`4.56μs ± 32.44ns`|`4.94μs`|`4.2μs - 4.94μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`670.96ns ± 2.46ns`|`721.57ns`|`658.64ns - 721.57ns`|
|Set|`131072`|`683.74ns ± 4.98ns`|`785.94ns`|`654.41ns - 785.94ns`|
|Array.includes()|`131072`|`4.58μs ± 42.08ns`|`5.02μs`|`4.2μs - 5.02μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.31μs ± 3.26ns`|`1.39μs`|`1.27μs - 1.39μs`|
|Set direct assign|`131072`|`1.43μs ± 10.14ns`|`1.57μs`|`1.35μs - 1.57μs`|
|Array.includes()|`131072`|`6.45μs ± 34.34ns`|`6.81μs`|`6.14μs - 6.81μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`841.25ns ± 6.89ns`|`1.03μs`|`814.23ns - 1.03μs`|
|Set direct assign|`131072`|`932.64ns ± 8.19ns`|`1.04μs`|`869.82ns - 1.04μs`|
|Array.includes()|`131072`|`6.45μs ± 35.5ns`|`6.82μs`|`6.04μs - 6.82μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.21μs ± 11.07ns`|`2.34μs`|`2.12μs - 2.34μs`|
|Set|`131072`|`2.28μs ± 19.35ns`|`2.5μs`|`2.1μs - 2.5μs`|
|Array.includes()|`131072`|`17.29μs ± 27.06ns`|`17.61μs`|`16.81μs - 17.61μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.19μs ± 31.28ns`|`2.17μs`|`1.12μs - 2.17μs`|
|Set direct assign|`131072`|`1.25μs ± 9.61ns`|`1.35μs`|`1.18μs - 1.35μs`|
|Array.includes()|`131072`|`17.3μs ± 37.39ns`|`17.73μs`|`17.04μs - 17.73μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await promise|`524288`|`159.25ns ± 1.7ns`|`255.48ns`|`136.07ns - 264.21ns`|
|generator|`524288`|`185.23ns ± 1.73ns`|`282.91ns`|`156.74ns - 292.09ns`|
|await non-promise|`524288`|`351.31ns ± 13.22ns`|`1.1μs`|`122.82ns - 1.21μs`|
|async generator|`524288`|`829.38ns ± 5.85ns`|`1.24μs`|`800.4ns - 1.27μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.33μs ± 26.17ns`|`1.49μs`|`884.33ns - 1.49μs`|
|generator|`131072`|`2.16μs ± 3.06ns`|`2.2μs`|`2.14μs - 2.2μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`181.53ns ± 2.02ns`|`233.35ns`|`149.4ns - 256.04ns`|`181.53ns ± 103.56ns`|`1.48μs`|`1.26μs - 1.78μs`|
|map|`524288`|`210.98ns ± 2.1ns`|`274.21ns`|`180.53ns - 278.27ns`|`210.98ns ± 98.78ns`|`1.45μs`|`1.2μs - 1.53μs`|
|linked list map|`524288`|`252.48ns ± 2.82ns`|`343.44ns`|`214.71ns - 374.4ns`|`252.48ns ± 95.98ns`|`1.52μs`|`1.22μs - 1.72μs`|
|two object buckets|`524288`|`305.3ns ± 3.52ns`|`516.83ns`|`266.53ns - 518.94ns`|`305.3ns ± 90.99ns`|`1.53μs`|`1.22μs - 1.67μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`24.67ns ± 447.58ps`|`38.63ns`|`18.04ns - 60.58ns`|`24.67ns ± 129.72ns`|`1.58μs`|`1.39μs - 1.61μs`|
|linked list map|`524288`|`25.52ns ± 584.56ps`|`54.93ns`|`17.95ns - 77.16ns`|`25.52ns ± 128.78ns`|`1.58μs`|`1.32μs - 1.58μs`|
|two map buckets|`524288`|`37ns ± 514.65ps`|`66.4ns`|`27.66ns - 73.43ns`|`37ns ± 117.38ns`|`1.45μs`|`1.27μs - 1.57μs`|
|two object buckets|`524288`|`52.72ns ± 544.4ps`|`77.67ns`|`45.47ns - 92.87ns`|`52.72ns ± 116.31ns`|`1.53μs`|`1.26μs - 1.59μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.99ns ± 556.39ps`|`86.81ns`|`61.34ns - 108.94ns`|`65.99ns ± 116.48ns`|`1.51μs`|`1.28μs - 1.58μs`|
|two object buckets|`524288`|`101.44ns ± 497.08ps`|`125.03ns`|`93.81ns - 128.85ns`|`101.44ns ± 111.14ns`|`1.55μs`|`1.24μs - 1.62μs`|
|map|`524288`|`111.9ns ± 881.24ps`|`134.9ns`|`95.06ns - 135.59ns`|`111.9ns ± 109.3ns`|`1.45μs`|`1.23μs - 1.45μs`|
|linked list map|`524288`|`142.68ns ± 875.89ps`|`172.71ns`|`125.87ns - 178.16ns`|`142.68ns ± 109.45ns`|`1.46μs`|`1.29μs - 1.49μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`186.5ns ± 2.41ns`|`292.91ns`|`154.08ns - 320.77ns`|`186.5ns ± 104.19ns`|`1.45μs`|`1.28μs - 1.45μs`|
|map|`524288`|`238.79ns ± 2.35ns`|`314.41ns`|`209.57ns - 315.36ns`|`238.79ns ± 98.28ns`|`1.44μs`|`1.24μs - 1.73μs`|
|linked list map|`524288`|`287.23ns ± 3.08ns`|`374.22ns`|`240.44ns - 377.85ns`|`287.23ns ± 96.95ns`|`1.47μs`|`1.31μs - 1.49μs`|
|two object buckets|`524288`|`349.66ns ± 3.88ns`|`444.64ns`|`277.06ns - 445.17ns`|`349.66ns ± 91.35ns`|`1.5μs`|`1.29μs - 1.54μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`27.08ns ± 487.86ps`|`44.91ns`|`22.87ns - 67.23ns`|`27.08ns ± 131.49ns`|`1.89μs`|`1.29μs - 2.21μs`|
|map|`524288`|`27.25ns ± 517.05ps`|`48.86ns`|`21.88ns - 69.53ns`|`27.25ns ± 128.6ns`|`1.65μs`|`1.33μs - 1.75μs`|
|two map buckets|`524288`|`45.78ns ± 510.24ps`|`67.13ns`|`35.24ns - 77.91ns`|`45.78ns ± 120.36ns`|`1.56μs`|`1.33μs - 1.59μs`|
|two object buckets|`524288`|`58.65ns ± 577.22ps`|`85.77ns`|`48.62ns - 96.49ns`|`58.65ns ± 116.29ns`|`1.52μs`|`1.28μs - 1.63μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`68.31ns ± 442.42ps`|`86.96ns`|`64.3ns - 105.54ns`|`68.31ns ± 117.27ns`|`1.53μs`|`1.31μs - 1.59μs`|
|two object buckets|`524288`|`95.37ns ± 429.08ps`|`111.47ns`|`87.81ns - 129.19ns`|`95.37ns ± 112.86ns`|`1.48μs`|`1.27μs - 1.51μs`|
|map|`524288`|`123.27ns ± 533.14ps`|`143.81ns`|`114.09ns - 154.73ns`|`123.27ns ± 109ns`|`1.46μs`|`1.26μs - 1.51μs`|
|linked list map|`524288`|`132.59ns ± 621ps`|`161.52ns`|`122.06ns - 189.18ns`|`132.59ns ± 112.95ns`|`1.57μs`|`1.31μs - 1.61μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`186.42ns ± 1.46ns`|`230.64ns`|`164.34ns - 273.2ns`|`186.42ns ± 104.66ns`|`1.47μs`|`1.27μs - 1.5μs`|
|linked list map|`524288`|`293.27ns ± 2.64ns`|`365.11ns`|`252.91ns - 368.69ns`|`293.27ns ± 98.6ns`|`1.5μs`|`1.32μs - 1.5μs`|
|two object buckets|`524288`|`307.32ns ± 2.53ns`|`406.81ns`|`267.78ns - 407.24ns`|`307.32ns ± 95.14ns`|`1.46μs`|`1.28μs - 1.52μs`|
|map|`524288`|`424.11ns ± 2.53ns`|`515.17ns`|`374.38ns - 550.99ns`|`424.11ns ± 84.09ns`|`1.45μs`|`1.29μs - 1.51μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`32.71ns ± 555.17ps`|`57.03ns`|`28.48ns - 74.55ns`|`32.71ns ± 134.81ns`|`1.77μs`|`1.43μs - 1.77μs`|
|map|`524288`|`37.32ns ± 457.45ps`|`52.3ns`|`32.57ns - 78.03ns`|`37.32ns ± 133.22ns`|`1.66μs`|`1.39μs - 1.99μs`|
|two map buckets|`524288`|`57.37ns ± 471.29ps`|`76.74ns`|`51.91ns - 92.13ns`|`57.37ns ± 123.69ns`|`1.65μs`|`1.34μs - 1.87μs`|
|two object buckets|`524288`|`67.79ns ± 470.4ps`|`83.81ns`|`61.3ns - 101.72ns`|`67.79ns ± 120.36ns`|`1.58μs`|`1.34μs - 1.77μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`67.22ns ± 418.05ps`|`78.21ns`|`63.34ns - 101.82ns`|`67.22ns ± 124.73ns`|`1.67μs`|`1.37μs - 1.74μs`|
|two object buckets|`524288`|`91.81ns ± 277.28ps`|`99.71ns`|`87.99ns - 100.96ns`|`91.81ns ± 119.76ns`|`1.55μs`|`1.33μs - 1.56μs`|
|linked list map|`524288`|`135.48ns ± 560.38ps`|`151.87ns`|`126.41ns - 189.49ns`|`135.48ns ± 115.56ns`|`1.53μs`|`1.35μs - 1.55μs`|
|map|`524288`|`286.16ns ± 816.45ps`|`329.64ns`|`276.43ns - 347.38ns`|`286.16ns ± 101.2ns`|`1.55μs`|`1.32μs - 1.66μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`216.25ns ± 3.09ns`|`291.63ns`|`180.81ns - 381.02ns`|`216.25ns ± 114.45ns`|`1.62μs`|`1.39μs - 2.37μs`|
|linked list map|`524288`|`299.09ns ± 3.18ns`|`430.97ns`|`253.28ns - 436.08ns`|`299.09ns ± 108.53ns`|`1.63μs`|`1.43μs - 1.63μs`|
|two object buckets|`524288`|`358.59ns ± 3.73ns`|`490.08ns`|`306.28ns - 521.06ns`|`358.59ns ± 111.37ns`|`1.78μs`|`1.47μs - 2.07μs`|
|map|`524288`|`1.81μs ± 3.84ns`|`1.93μs`|`1.75μs - 1.93μs`|`1.81μs ± 24.32ns`|`1.72μs`|`1.38μs - 1.73μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`31.02ns ± 536.63ps`|`61.83ns`|`26.03ns - 72.24ns`|`31.02ns ± 148.3ns`|`1.88μs`|`1.56μs - 1.96μs`|
|two map buckets|`524288`|`34.14ns ± 472.77ps`|`48.22ns`|`23.91ns - 67.75ns`|`34.14ns ± 143.55ns`|`1.79μs`|`1.54μs - 1.84μs`|
|linked list map|`524288`|`55.59ns ± 654.29ps`|`78.88ns`|`48.18ns - 103.5ns`|`55.59ns ± 149.26ns`|`1.89μs`|`1.65μs - 1.95μs`|
|map|`524288`|`131.07ns ± 490.64ps`|`148.11ns`|`121.35ns - 157.83ns`|`131.07ns ± 131.46ns`|`1.74μs`|`1.5μs - 1.85μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`52.66ns ± 717.9ps`|`84.63ns`|`42.57ns - 88.59ns`|`52.66ns ± 174.56ns`|`2.21μs`|`1.69μs - 2.26μs`|
|two object buckets|`524288`|`53.63ns ± 648.34ps`|`92.09ns`|`32.3ns - 101.33ns`|`53.63ns ± 157.8ns`|`2.03μs`|`1.67μs - 2.04μs`|
|linked list map|`524288`|`63.54ns ± 713.66ps`|`98.59ns`|`38.56ns - 102.44ns`|`63.54ns ± 154.11ns`|`2.15μs`|`1.61μs - 2.34μs`|
|map|`524288`|`125.3ns ± 682.11ps`|`145.31ns`|`114.25ns - 176.36ns`|`125.3ns ± 167.31ns`|`2.18μs`|`1.82μs - 2.2μs`|

