# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`429.47ps ± 7.26ps`|`2.23ns`|`327.64ps - 45.63ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic object|`524288`|`3.6ns ± 456.26ps`|`33.69ns`|`1.63ns - 33.73ns`|
|polymorphic array|`524288`|`3.93ns ± 366ps`|`27.68ns`|`1.82ns - 33.53ns`|
|monomorphic array|`524288`|`4.88ns ± 669.79ps`|`29.47ns`|`1.53ns - 32.43ns`|
|polymorphic object|`524288`|`9.88ns ± 850.5ps`|`33.72ns`|`3.07ns - 37.58ns`|
|megamorphic object|`524288`|`26.74ns ± 812.55ps`|`51.84ns`|`10.74ns - 53.52ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`5.73ns ± 508.22ps`|`28.98ns`|`2.19ns - 34.93ns`|
|monomorphic object|`524288`|`8.1ns ± 450.24ps`|`25.8ns`|`3.6ns - 30.65ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`8.52ns ± 219.15ps`|`22.18ns`|`7.7ns - 27.31ns`|
|prototype chain (override prototype)|`524288`|`13.74ns ± 236.76ps`|`22.77ns`|`11.04ns - 30.58ns`|
|WeakMap store|`524288`|`13.74ns ± 440.03ps`|`21.47ns`|`7.52ns - 55.24ns`|
|prototype chain (create with prototype)|`524288`|`14.98ns ± 197.84ps`|`20.48ns`|`10.27ns - 32.46ns`|
## init
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`123.03ns ± 1.53ns`|`195.11ns`|`107.65ns - 208.49ns`|
|Object.create(null)|`524288`|`310.7ns ± 4.45ns`|`464.09ns`|`275.93ns - 468.32ns`|
|object literal (computed properties)|`524288`|`985.62ns ± 7.22ns`|`1.16μs`|`917.36ns - 1.22μs`|
|function constructor|`524288`|`1.05μs ± 7.77ns`|`1.27μs`|`977.25ns - 1.28μs`|
|function constructor (freezed proto)|`524288`|`1.06μs ± 8.05ns`|`1.21μs`|`978.46ns - 1.28μs`|
|object literal|`524288`|`1.09μs ± 7.42ns`|`1.22μs`|`1μs - 1.24μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|constructor|`524288`|`6.03ns ± 1.35ns`|`52.99ns`|`1.06ns - 157.13ns`|
|Object.create()|`524288`|`9.19ns ± 1.35ns`|`71.66ns`|`1.81ns - 72.61ns`|
|set prototype|`524288`|`12.72ns ± 1.35ns`|`27.02ns`|`1.7ns - 171.13ns`|
|object spread|`524288`|`88.64ns ± 1.89ns`|`186.64ns`|`59.27ns - 189.04ns`|
|function constructor|`524288`|`89.89ns ± 2.98ns`|`160.65ns`|`1.25ns - 172.64ns`|
|Object.setPrototypeOf()|`524288`|`217.38ns ± 2.6ns`|`405.93ns`|`197.77ns - 441.31ns`|
|set __proto__|`524288`|`302.97ns ± 7.2ns`|`456.47ns`|`184.62ns - 507.94ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`59.16ns ± 555.46ps`|`97.45ns`|`42.45ns - 105.38ns`|
|Set|`1048576`|`158.29ns ± 748.55ps`|`189.41ns`|`131.82ns - 291.31ns`|
|Set direct assign|`1048576`|`171.94ns ± 1.43ns`|`295.22ns`|`149.4ns - 351.44ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`58.42ns ± 335.35ps`|`76.97ns`|`48.62ns - 88.99ns`|
|Set|`1048576`|`94.28ns ± 779.61ps`|`149.05ns`|`72.06ns - 176.88ns`|
|Set direct assign|`1048576`|`106.88ns ± 697.54ps`|`129.03ns`|`94.81ns - 184.24ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`82.35ns ± 623.29ps`|`129.56ns`|`63.52ns - 140.51ns`|
|Set|`1048576`|`182.26ns ± 2.49ns`|`339.13ns`|`142.12ns - 365.62ns`|
|Set direct assign|`1048576`|`186.41ns ± 1.55ns`|`310.4ns`|`169.49ns - 369.29ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`96.95ns ± 723.13ps`|`157.66ns`|`78.6ns - 161.7ns`|
|Set direct assign|`1048576`|`110.46ns ± 616.54ps`|`136.39ns`|`89.76ns - 194.2ns`|
|Array.includes()|`1048576`|`140.17ns ± 1.46ns`|`226.77ns`|`118.95ns - 234.78ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`110.83ns ± 1.14ns`|`186.06ns`|`94.99ns - 191.4ns`|
|Set|`1048576`|`200.45ns ± 1.35ns`|`234.54ns`|`185.11ns - 385.41ns`|
|Set direct assign|`1048576`|`211.98ns ± 1.54ns`|`272.19ns`|`182.36ns - 456.61ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`107.35ns ± 769.82ps`|`171.49ns`|`94.59ns - 178.25ns`|
|Set direct assign|`1048576`|`118.4ns ± 909.56ps`|`199.89ns`|`92.45ns - 227.91ns`|
|Array.includes()|`1048576`|`236.83ns ± 1.82ns`|`407.06ns`|`210.48ns - 425.21ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`263.26ns ± 1.36ns`|`299.62ns`|`238.12ns - 529.25ns`|
|Set|`1048576`|`331.11ns ± 1.64ns`|`360.04ns`|`303.59ns - 628.7ns`|
|Array.includes()|`1048576`|`428.41ns ± 3.22ns`|`672.28ns`|`399.89ns - 785.29ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`123.16ns ± 1.02ns`|`212.39ns`|`100.01ns - 218.6ns`|
|Set|`1048576`|`179.18ns ± 1.02ns`|`245.54ns`|`165.22ns - 316.53ns`|
|Array.includes()|`1048576`|`440.8ns ± 3.95ns`|`701.44ns`|`396.96ns - 782.52ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`227.21ns ± 3.3ns`|`420.99ns`|`204.66ns - 453.82ns`|
|Array.includes()|`524288`|`244.89ns ± 3.52ns`|`409.04ns`|`207.97ns - 415.5ns`|
|Set direct assign|`524288`|`247.94ns ± 3.17ns`|`484.31ns`|`224.65ns - 491.47ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`148.4ns ± 1.51ns`|`251.53ns`|`124.26ns - 281.21ns`|
|Set direct assign|`524288`|`174.36ns ± 1.91ns`|`274.51ns`|`157.36ns - 275.14ns`|
|Array.includes()|`524288`|`242.3ns ± 2.81ns`|`411.37ns`|`209.95ns - 414.31ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`193.6ns ± 2.93ns`|`339.83ns`|`158.51ns - 342.45ns`|
|Set|`524288`|`259.89ns ± 2.71ns`|`493.74ns`|`244.1ns - 499.89ns`|
|Set direct assign|`524288`|`277.79ns ± 3.61ns`|`544.18ns`|`249.55ns - 550.86ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`165.9ns ± 1.92ns`|`276.34ns`|`150.28ns - 280.55ns`|
|Set direct assign|`524288`|`175.56ns ± 1.18ns`|`215.14ns`|`158.96ns - 277.84ns`|
|Array.includes()|`524288`|`485.83ns ± 4.65ns`|`887.02ns`|`453.47ns - 898.04ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`326.07ns ± 2.21ns`|`486.77ns`|`310.25ns - 510.57ns`|
|Set|`524288`|`388.58ns ± 5.22ns`|`738.14ns`|`363.42ns - 740.79ns`|
|Array.includes()|`524288`|`947.28ns ± 1.26ns`|`990.99ns`|`932.03ns - 1.06μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`183.96ns ± 1.73ns`|`281.25ns`|`168.74ns - 343.72ns`|
|Set|`524288`|`233.87ns ± 1.9ns`|`311.82ns`|`220.51ns - 420.07ns`|
|Array.includes()|`524288`|`965.33ns ± 7.73ns`|`1.35μs`|`928.07ns - 1.85μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`345.24ns ± 2.79ns`|`453.95ns`|`308.3ns - 656.55ns`|
|Set direct assign|`524288`|`551.84ns ± 7.23ns`|`1.08μs`|`525.92ns - 1.28μs`|
|Set|`524288`|`581.2ns ± 1.15ns`|`618.84ns`|`558.81ns - 621.46ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`291.22ns ± 2.22ns`|`366.57ns`|`275.96ns - 538.67ns`|
|Set|`524288`|`336.49ns ± 2.87ns`|`531.14ns`|`307.86ns - 606.28ns`|
|Array.includes()|`524288`|`870.18ns ± 8.51ns`|`1.42μs`|`835.95ns - 1.61μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`733.63ns ± 28.84ns`|`1.52μs`|`673.2ns - 1.52μs`|
|Set direct assign|`131072`|`789.15ns ± 13.41ns`|`889.25ns`|`700.85ns - 889.25ns`|
|Array.includes()|`131072`|`3.85μs ± 34.02ns`|`4.24μs`|`3.61μs - 4.24μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`539.51ns ± 5.1ns`|`671.69ns`|`518.98ns - 671.69ns`|
|Set|`131072`|`565.97ns ± 10.11ns`|`786.6ns`|`531.36ns - 786.6ns`|
|Array.includes()|`131072`|`4.04μs ± 45.57ns`|`4.33μs`|`3.63μs - 4.33μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`914.98ns ± 25.88ns`|`1.73μs`|`874.67ns - 1.73μs`|
|Set direct assign|`131072`|`992.8ns ± 12.77ns`|`1.12μs`|`931.66ns - 1.12μs`|
|Array.includes()|`131072`|`4.38μs ± 41.29ns`|`4.85μs`|`4.07μs - 4.85μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`668.37ns ± 8.14ns`|`900.74ns`|`636.39ns - 900.74ns`|
|Set direct assign|`131072`|`744.99ns ± 11.88ns`|`850.51ns`|`669.85ns - 850.51ns`|
|Array.includes()|`131072`|`4.43μs ± 44.75ns`|`4.85μs`|`4.07μs - 4.85μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.41μs ± 12.68ns`|`1.52μs`|`1.33μs - 1.52μs`|
|Set|`131072`|`1.47μs ± 27.73ns`|`1.68μs`|`1.31μs - 1.68μs`|
|Array.includes()|`131072`|`2.77μs ± 43.16ns`|`3.17μs`|`2.48μs - 3.17μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`839ns ± 9.99ns`|`1.12μs`|`811.38ns - 1.12μs`|
|Set direct assign|`131072`|`920.83ns ± 11.26ns`|`1.02μs`|`850.13ns - 1.02μs`|
|Array.includes()|`131072`|`6.34μs ± 44.36ns`|`6.76μs`|`6.13μs - 6.76μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.21μs ± 26.94ns`|`2.71μs`|`2.08μs - 2.71μs`|
|Set|`131072`|`2.29μs ± 29.98ns`|`2.6μs`|`2.08μs - 2.6μs`|
|Array.includes()|`131072`|`16.99μs ± 42.29ns`|`17.33μs`|`16.74μs - 17.33μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.21μs ± 11.24ns`|`1.32μs`|`1.14μs - 1.32μs`|
|Set|`131072`|`1.21μs ± 25.83ns`|`1.79μs`|`1.12μs - 1.79μs`|
|Array.includes()|`131072`|`16.96μs ± 40.9ns`|`17.37μs`|`16.6μs - 17.37μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|generator|`524288`|`92.76ns ± 759.78ps`|`146.45ns`|`82.85ns - 147.13ns`|
|await promise|`524288`|`126.11ns ± 1.43ns`|`213.08ns`|`111.65ns - 233.5ns`|
|await non-promise|`524288`|`139.84ns ± 989.32ps`|`181.5ns`|`125.06ns - 219.65ns`|
|async generator|`524288`|`740.56ns ± 2.58ns`|`783.09ns`|`726.63ns - 1.06μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.3μs ± 48.2ns`|`2.51μs`|`852.91ns - 2.51μs`|
|generator|`131072`|`2.04μs ± 30.62ns`|`2.98μs`|`1.98μs - 2.98μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`156ns ± 1.28ns`|`231.8ns`|`141.27ns - 245.9ns`|`156ns ± 90.62ns`|`1.28μs`|`1.12μs - 1.28μs`|
|map|`524288`|`188.61ns ± 1.3ns`|`228.34ns`|`174.29ns - 316.64ns`|`188.61ns ± 86.66ns`|`1.3μs`|`1.11μs - 1.47μs`|
|linked list map|`524288`|`218.24ns ± 1.73ns`|`329.72ns`|`197.29ns - 353.92ns`|`218.24ns ± 85.19ns`|`1.3μs`|`1.13μs - 1.32μs`|
|two object buckets|`524288`|`301.81ns ± 3.47ns`|`495.83ns`|`273.34ns - 527.36ns`|`301.81ns ± 77.84ns`|`1.25μs`|`1.11μs - 1.45μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`24.08ns ± 428.02ps`|`51.23ns`|`15.67ns - 57.13ns`|`24.08ns ± 114.75ns`|`1.43μs`|`1.2μs - 1.46μs`|
|linked list map|`524288`|`25.74ns ± 484.94ps`|`57.12ns`|`18.17ns - 62.43ns`|`25.74ns ± 114.63ns`|`1.46μs`|`1.18μs - 1.48μs`|
|two map buckets|`524288`|`35.78ns ± 596.22ps`|`71.92ns`|`28.46ns - 83.13ns`|`35.78ns ± 106.13ns`|`1.36μs`|`1.16μs - 1.37μs`|
|two object buckets|`524288`|`48.31ns ± 469.8ps`|`62.89ns`|`40.59ns - 81.72ns`|`48.31ns ± 105.36ns`|`1.73μs`|`1.14μs - 1.75μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`60.3ns ± 416.89ps`|`71.13ns`|`55.06ns - 96.56ns`|`60.3ns ± 104.4ns`|`1.4μs`|`1.15μs - 1.4μs`|
|two object buckets|`524288`|`89.84ns ± 667.79ps`|`119.2ns`|`82.97ns - 143.78ns`|`89.84ns ± 100.9ns`|`1.34μs`|`1.16μs - 1.34μs`|
|map|`524288`|`90.96ns ± 606.92ps`|`113.47ns`|`66.85ns - 113.55ns`|`90.96ns ± 99.54ns`|`1.32μs`|`1.12μs - 1.37μs`|
|linked list map|`524288`|`122.76ns ± 795.29ps`|`168.07ns`|`101.62ns - 177.64ns`|`122.76ns ± 99.53ns`|`1.34μs`|`1.16μs - 1.36μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`163.72ns ± 958.77ps`|`191.73ns`|`150.41ns - 249.08ns`|`163.72ns ± 93.8ns`|`1.34μs`|`1.16μs - 1.37μs`|
|linked list map|`524288`|`224.27ns ± 1.3ns`|`301.21ns`|`206.89ns - 343.6ns`|`224.27ns ± 89.12ns`|`1.37μs`|`1.16μs - 1.39μs`|
|map|`524288`|`225.39ns ± 2.33ns`|`330.78ns`|`202.52ns - 334.92ns`|`225.39ns ± 88.76ns`|`1.33μs`|`1.15μs - 1.36μs`|
|two object buckets|`524288`|`289.35ns ± 2.32ns`|`443.09ns`|`266.54ns - 459.83ns`|`289.35ns ± 84.17ns`|`1.34μs`|`1.17μs - 1.36μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`26.99ns ± 506ps`|`61.86ns`|`19.74ns - 62.46ns`|`26.99ns ± 113.77ns`|`1.58μs`|`1.2μs - 1.65μs`|
|linked list map|`524288`|`27.59ns ± 457.79ps`|`59.12ns`|`23.01ns - 62.3ns`|`27.59ns ± 111.35ns`|`1.41μs`|`1.2μs - 1.52μs`|
|two map buckets|`524288`|`44.72ns ± 513.61ps`|`72.23ns`|`35.17ns - 80.05ns`|`44.72ns ± 103.62ns`|`1.37μs`|`1.16μs - 1.37μs`|
|two object buckets|`524288`|`52.86ns ± 382.62ps`|`67.16ns`|`46.06ns - 68.12ns`|`52.86ns ± 103.19ns`|`1.34μs`|`1.15μs - 1.35μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`63.24ns ± 362.66ps`|`77.59ns`|`56.94ns - 79.6ns`|`63.24ns ± 103.38ns`|`1.35μs`|`1.14μs - 1.35μs`|
|two object buckets|`524288`|`81.36ns ± 670.79ps`|`107.12ns`|`58.72ns - 136.79ns`|`81.36ns ± 102.44ns`|`1.63μs`|`1.16μs - 1.64μs`|
|map|`524288`|`113.51ns ± 939.87ps`|`157.3ns`|`90.01ns - 165.55ns`|`113.51ns ± 97.3ns`|`1.43μs`|`1.13μs - 1.64μs`|
|linked list map|`524288`|`120.69ns ± 757.33ps`|`158.79ns`|`112.17ns - 161.08ns`|`120.69ns ± 99.09ns`|`1.41μs`|`1.15μs - 1.47μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`163.21ns ± 2.54ns`|`266.81ns`|`130.98ns - 292.9ns`|`163.21ns ± 94.83ns`|`1.35μs`|`1.16μs - 1.42μs`|
|linked list map|`524288`|`264.71ns ± 2.49ns`|`379.14ns`|`244.45ns - 389.71ns`|`264.71ns ± 88.15ns`|`1.43μs`|`1.18μs - 1.49μs`|
|two object buckets|`524288`|`280.87ns ± 2.45ns`|`376.67ns`|`245.92ns - 413.27ns`|`280.87ns ± 86.8ns`|`1.41μs`|`1.18μs - 1.54μs`|
|map|`524288`|`432.34ns ± 4.32ns`|`533.55ns`|`361.88ns - 557.59ns`|`432.34ns ± 70.61ns`|`1.31μs`|`1.17μs - 1.57μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|linked list map|`524288`|`32.88ns ± 504.95ps`|`68.99ns`|`21.88ns - 73.86ns`|`32.88ns ± 116.72ns`|`1.47μs`|`1.27μs - 1.58μs`|
|map|`524288`|`36.45ns ± 302.84ps`|`49.33ns`|`33.26ns - 51.49ns`|`36.45ns ± 113.09ns`|`1.43μs`|`1.19μs - 1.49μs`|
|two map buckets|`524288`|`56.4ns ± 499.78ps`|`80.27ns`|`49.57ns - 84.59ns`|`56.4ns ± 105.77ns`|`1.42μs`|`1.18μs - 1.54μs`|
|two object buckets|`524288`|`61.72ns ± 419.16ps`|`70.87ns`|`42.68ns - 93.49ns`|`61.72ns ± 105.58ns`|`1.35μs`|`1.18μs - 1.43μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`65.83ns ± 434.31ps`|`88.85ns`|`61.29ns - 90.48ns`|`65.83ns ± 111.35ns`|`1.46μs`|`1.21μs - 1.51μs`|
|two object buckets|`524288`|`83.99ns ± 536.58ps`|`104.68ns`|`78.28ns - 131.44ns`|`83.99ns ± 102.72ns`|`1.34μs`|`1.18μs - 1.42μs`|
|linked list map|`524288`|`123.63ns ± 681.22ps`|`157.97ns`|`95.95ns - 163.36ns`|`123.63ns ± 103.11ns`|`1.39μs`|`1.21μs - 1.4μs`|
|map|`524288`|`276.16ns ± 1.38ns`|`334.15ns`|`236.59ns - 362.57ns`|`276.16ns ± 86.74ns`|`1.4μs`|`1.16μs - 1.59μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`186.92ns ± 3.19ns`|`290.22ns`|`154.68ns - 307.5ns`|`186.92ns ± 104.93ns`|`1.55μs`|`1.28μs - 1.57μs`|
|linked list map|`524288`|`274.9ns ± 2.39ns`|`369.95ns`|`241.37ns - 393.29ns`|`274.9ns ± 99.82ns`|`1.52μs`|`1.3μs - 1.71μs`|
|two object buckets|`524288`|`342.83ns ± 8.01ns`|`740.56ns`|`280.07ns - 804.14ns`|`342.83ns ± 103ns`|`1.83μs`|`1.35μs - 2.16μs`|
|map|`524288`|`1.65μs ± 8.43ns`|`1.9μs`|`1.39μs - 1.92μs`|`1.65μs ± 24.33ns`|`1.54μs`|`1.28μs - 1.63μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`26.26ns ± 382.69ps`|`38.6ns`|`24.02ns - 65.58ns`|`26.26ns ± 132.97ns`|`1.69μs`|`1.44μs - 1.7μs`|
|two map buckets|`524288`|`28.86ns ± 431.57ps`|`59.11ns`|`26.04ns - 65.75ns`|`28.86ns ± 150.21ns`|`1.88μs`|`1.56μs - 1.89μs`|
|linked list map|`524288`|`59.71ns ± 547.39ps`|`90.79ns`|`53.46ns - 101.28ns`|`59.71ns ± 135.16ns`|`1.79μs`|`1.45μs - 2.24μs`|
|map|`524288`|`118.69ns ± 532.68ps`|`141.89ns`|`109.3ns - 142.58ns`|`118.69ns ± 118.53ns`|`1.62μs`|`1.33μs - 1.63μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`42.57ns ± 448.34ps`|`58.15ns`|`38.11ns - 82.1ns`|`42.57ns ± 147.64ns`|`1.86μs`|`1.56μs - 1.89μs`|
|two object buckets|`524288`|`55.8ns ± 734.49ps`|`102.27ns`|`50.72ns - 105.69ns`|`55.8ns ± 143.03ns`|`1.95μs`|`1.41μs - 2μs`|
|linked list map|`524288`|`62.1ns ± 519.98ps`|`81.12ns`|`45.38ns - 102.23ns`|`62.1ns ± 162.56ns`|`2.1μs`|`1.68μs - 2.27μs`|
|map|`524288`|`123.73ns ± 508.75ps`|`138.12ns`|`115.48ns - 158.62ns`|`123.73ns ± 146.43ns`|`1.9μs`|`1.47μs - 1.97μs`|
# Web APIs
## Response
### with headers
|case|runs|mean|p99|range|
|-|-|-|-|-|
|headers record|`1048576`|`998.52ns ± 6.44ns`|`1.46μs`|`864.42ns - 1.78μs`|
|header pairs|`1048576`|`1.07μs ± 4.54ns`|`1.47μs`|`948.76ns - 1.52μs`|
|new Headers().append()|`1048576`|`1.37μs ± 11.09ns`|`2.34μs`|`1.23μs - 2.98μs`|
|new Headers().set()|`1048576`|`1.37μs ± 13.7ns`|`2.39μs`|`1.23μs - 3.56μs`|
|new Headers(pairs)|`1048576`|`1.6μs ± 12.9ns`|`2.6μs`|`1.47μs - 3.77μs`|
|new Headers(record)|`1048576`|`1.73μs ± 8.97ns`|`2.47μs`|`1.61μs - 3.26μs`|

