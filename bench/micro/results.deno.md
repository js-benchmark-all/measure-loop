# cpu
|case|runs|mean|p99|range|
|-|-|-|-|-|
|clk|`40960000`|`412.78ps ± 14.32ps`|`332.76ps`|`327.64ps - 32.45ns`|
# object
## access
### without init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`2.73ns ± 381.14ps`|`30.74ns`|`1.47ns - 31.49ns`|
|polymorphic object|`524288`|`4.81ns ± 459.23ps`|`30.51ns`|`2.18ns - 38.24ns`|
|polymorphic array|`524288`|`6.02ns ± 750.89ps`|`31.78ns`|`1.66ns - 33.05ns`|
|monomorphic object|`524288`|`6.04ns ± 824.74ps`|`34.88ns`|`1.74ns - 37.5ns`|
|megamorphic object|`524288`|`24.7ns ± 697.59ps`|`54.08ns`|`12.12ns - 56.51ns`|
### with init
|case|runs|mean|p99|range|
|-|-|-|-|-|
|monomorphic array|`524288`|`6.03ns ± 531.94ps`|`29.18ns`|`2.25ns - 29.27ns`|
|monomorphic object|`524288`|`7.45ns ± 477.47ps`|`25.96ns`|`3.6ns - 30.83ns`|
### custom props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|direct assign|`524288`|`8.38ns ± 229.37ps`|`13.68ns`|`7.72ns - 34.71ns`|
|prototype chain (override prototype)|`524288`|`13.48ns ± 323.9ps`|`23.9ns`|`11.32ns - 40.22ns`|
|prototype chain (create with prototype)|`524288`|`14.38ns ± 168.36ps`|`19.04ns`|`10.37ns - 29.33ns`|
|WeakMap store|`524288`|`18.04ns ± 413.95ps`|`28.79ns`|`11.89ns - 48.02ns`|
## init
### static props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Object.create()|`1048576`|`13.15ns ± 140.46ps`|`19.69ns`|`7.18ns - 37.19ns`|
|function constructor|`1048576`|`13.84ns ± 402.94ps`|`41.64ns`|`6.42ns - 42.9ns`|
|class with default initializer, without constructor|`1048576`|`13.98ns ± 399.32ps`|`38.03ns`|`7.02ns - 46.13ns`|
|function without constructor|`1048576`|`14.37ns ± 461.52ps`|`45.52ns`|`10.12ns - 52.48ns`|
|class without constructor|`1048576`|`15.15ns ± 452.45ps`|`42ns`|`10.1ns - 51.24ns`|
|class with constructor|`1048576`|`20.62ns ± 683.1ps`|`45.81ns`|`10.26ns - 51.02ns`|
### dynamic props
|case|runs|mean|p99|range|
|-|-|-|-|-|
|WeakMap store|`524288`|`130.17ns ± 1.81ns`|`201.32ns`|`108.99ns - 203.71ns`|
|Object.create(null)|`524288`|`335.18ns ± 2.65ns`|`394.99ns`|`300.42ns - 397.68ns`|
|function constructor (freezed proto)|`524288`|`1.04μs ± 5.82ns`|`1.18μs`|`992.62ns - 1.18μs`|
|object literal (computed properties)|`524288`|`1.04μs ± 6.44ns`|`1.13μs`|`947.25ns - 1.14μs`|
|function constructor|`524288`|`1.09μs ± 6.83ns`|`1.19μs`|`1μs - 1.2μs`|
|object literal|`524288`|`1.09μs ± 6.21ns`|`1.19μs`|`1.01μs - 1.2μs`|
### static props with methods
|case|runs|mean|p99|range|
|-|-|-|-|-|
|function constructor|`524288`|`6.32ns ± 1.16ns`|`101.55ns`|`1.91ns - 107.71ns`|
|constructor|`524288`|`23.66ns ± 3.48ns`|`185.79ns`|`1.05ns - 201.99ns`|
|Object.create()|`524288`|`52.45ns ± 3.06ns`|`180.05ns`|`1.96ns - 183.39ns`|
|Object.setPrototypeOf()|`524288`|`216.76ns ± 3.64ns`|`418.57ns`|`194.21ns - 428.43ns`|
|set __proto__|`524288`|`327.2ns ± 6.78ns`|`477.37ns`|`220.82ns - 524.27ns`|
|object spread|`524288`|`618.18ns ± 3.98ns`|`863.52ns`|`589.2ns - 873.68ns`|
# array
## unique items
### size 8
#### 1 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`60.16ns ± 545.13ps`|`98.59ns`|`31.87ns - 113.93ns`|
|Set|`1048576`|`157.87ns ± 1.19ns`|`251.19ns`|`134.94ns - 305.52ns`|
|Set direct assign|`1048576`|`172.54ns ± 1.39ns`|`284.37ns`|`156.36ns - 335.42ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`66.27ns ± 938.69ps`|`107.73ns`|`50.66ns - 117.67ns`|
|Set|`1048576`|`94.62ns ± 743.51ps`|`149.25ns`|`78.9ns - 176.56ns`|
|Set direct assign|`1048576`|`115.96ns ± 1.23ns`|`178.57ns`|`95.34ns - 192.18ns`|
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`82.31ns ± 371.4ps`|`97.38ns`|`71.33ns - 103.72ns`|
|Set|`1048576`|`170.51ns ± 1.1ns`|`211.97ns`|`152.65ns - 333.2ns`|
|Set direct assign|`1048576`|`184.68ns ± 1.3ns`|`222.67ns`|`169.31ns - 367.28ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`98.82ns ± 776.38ps`|`159.27ns`|`73.56ns - 163.44ns`|
|Set direct assign|`1048576`|`121.36ns ± 1.44ns`|`195.19ns`|`89.94ns - 202.8ns`|
|Array.includes()|`1048576`|`133.69ns ± 804.4ps`|`186.98ns`|`108.51ns - 226.81ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`1048576`|`109.7ns ± 814.97ps`|`146.64ns`|`77.37ns - 216.79ns`|
|Set|`1048576`|`201.32ns ± 1.45ns`|`353.61ns`|`175.45ns - 389.47ns`|
|Set direct assign|`1048576`|`215.25ns ± 1.75ns`|`373.67ns`|`197.54ns - 422.38ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`1048576`|`106.62ns ± 635.24ps`|`128.21ns`|`95.59ns - 178.73ns`|
|Set direct assign|`1048576`|`146.77ns ± 1.87ns`|`212.82ns`|`105.37ns - 220.11ns`|
|Array.includes()|`1048576`|`235.02ns ± 1.78ns`|`416.57ns`|`210.39ns - 451.09ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`262.82ns ± 1.22ns`|`297.62ns`|`250.22ns - 515.59ns`|
|Set|`1048576`|`320.62ns ± 1.12ns`|`348.87ns`|`296.7ns - 560.77ns`|
|Array.includes()|`1048576`|`534.89ns ± 6.4ns`|`680.37ns`|`407.45ns - 767.86ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`1048576`|`140.38ns ± 1.63ns`|`212.92ns`|`95.25ns - 223.75ns`|
|Set|`1048576`|`175.85ns ± 1.15ns`|`257ns`|`153.34ns - 315.25ns`|
|Array.includes()|`1048576`|`430.93ns ± 2.73ns`|`684.06ns`|`410.63ns - 879.28ns`|
### size 16
#### 2 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Array.includes()|`524288`|`133.33ns ± 1.01ns`|`157.66ns`|`118.57ns - 222.97ns`|
|Set|`524288`|`224.81ns ± 3.17ns`|`425.09ns`|`204.61ns - 425.24ns`|
|Set direct assign|`524288`|`249.93ns ± 2.82ns`|`475.14ns`|`219.94ns - 483.91ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`150.36ns ± 1.5ns`|`234.09ns`|`122.39ns - 255.99ns`|
|Set direct assign|`524288`|`171.37ns ± 1.68ns`|`273.58ns`|`142.81ns - 314.04ns`|
|Array.includes()|`524288`|`238.22ns ± 2.18ns`|`395.5ns`|`211.47ns - 431.71ns`|
#### 4 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`269.67ns ± 2.3ns`|`310.42ns`|`254.88ns - 545.38ns`|
|Set|`524288`|`323.83ns ± 7.22ns`|`494.52ns`|`235.97ns - 495.71ns`|
|Array.includes()|`524288`|`485.46ns ± 614.43ps`|`506.7ns`|`469.78ns - 509.57ns`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`524288`|`164.02ns ± 791.78ps`|`196.16ns`|`148.42ns - 199.44ns`|
|Set direct assign|`524288`|`187.03ns ± 2.78ns`|`331.81ns`|`163.27ns - 335.29ns`|
|Array.includes()|`524288`|`575.7ns ± 8.91ns`|`747.66ns`|`494.77ns - 749ns`|
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`324.39ns ± 3.62ns`|`615.77ns`|`307.27ns - 646.98ns`|
|Set|`524288`|`375.19ns ± 3.54ns`|`605.48ns`|`344.29ns - 731.95ns`|
|Array.includes()|`524288`|`967.21ns ± 7.08ns`|`1.18μs`|`939.06ns - 1.83μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`184.38ns ± 1.48ns`|`236.64ns`|`168.34ns - 337.42ns`|
|Set|`524288`|`228.5ns ± 1.78ns`|`322.4ns`|`211.31ns - 412.87ns`|
|Array.includes()|`524288`|`960.55ns ± 2.98ns`|`1.05μs`|`944.11ns - 1.32μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`558.14ns ± 6.93ns`|`1.06μs`|`514.31ns - 1.1μs`|
|Set|`524288`|`583.58ns ± 5.66ns`|`918.55ns`|`558.87ns - 1.12μs`|
|Array.includes()|`524288`|`882.95ns ± 3.49ns`|`1.11μs`|`860.31ns - 1.22μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`524288`|`289.34ns ± 976.55ps`|`321.44ns`|`275.98ns - 350.47ns`|
|Set|`524288`|`333.99ns ± 2.37ns`|`463.35ns`|`304.1ns - 543.38ns`|
|Array.includes()|`524288`|`895.31ns ± 9.09ns`|`1.55μs`|`856.85ns - 1.64μs`|
### size 64
#### 8 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`705.88ns ± 25.41ns`|`1.32μs`|`651.64ns - 1.32μs`|
|Set direct assign|`131072`|`762.6ns ± 11.39ns`|`887.98ns`|`681.42ns - 887.98ns`|
|Array.includes()|`131072`|`4.01μs ± 39.04ns`|`4.27μs`|`3.78μs - 4.27μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`537.99ns ± 2.24ns`|`565.3ns`|`521.11ns - 565.3ns`|
|Set direct assign|`131072`|`631.16ns ± 9.92ns`|`729.78ns`|`572.08ns - 729.78ns`|
|Array.includes()|`131072`|`3.95μs ± 39.01ns`|`4.28μs`|`3.66μs - 4.28μs`|
#### 16 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`917.92ns ± 25.64ns`|`1.72μs`|`879.89ns - 1.72μs`|
|Set direct assign|`131072`|`995.02ns ± 12.27ns`|`1.11μs`|`930.97ns - 1.11μs`|
|Array.includes()|`131072`|`1.27μs ± 40.25ns`|`2.45μs`|`1.19μs - 2.45μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`666.73ns ± 8.41ns`|`892.77ns`|`636.94ns - 892.77ns`|
|Set direct assign|`131072`|`724.23ns ± 9.05ns`|`806.7ns`|`671.52ns - 806.7ns`|
|Array.includes()|`131072`|`4.41μs ± 38.17ns`|`4.83μs`|`4.11μs - 4.83μs`|
#### 32 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`1.38μs ± 20.74ns`|`1.63μs`|`1.31μs - 1.63μs`|
|Set direct assign|`131072`|`1.4μs ± 11.86ns`|`1.52μs`|`1.33μs - 1.52μs`|
|Array.includes()|`131072`|`6.13μs ± 35.74ns`|`6.54μs`|`5.85μs - 6.54μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set|`131072`|`834.53ns ± 23.01ns`|`1.56μs`|`791.51ns - 1.56μs`|
|Set direct assign|`131072`|`898.2ns ± 10.14ns`|`1.03μs`|`850.11ns - 1.03μs`|
|Array.includes()|`131072`|`6.15μs ± 38.89ns`|`6.54μs`|`5.84μs - 6.54μs`|
#### 64 unique items
##### to unique array
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`2.15μs ± 12.28ns`|`2.25μs`|`2.08μs - 2.25μs`|
|Set|`131072`|`2.16μs ± 21.81ns`|`2.4μs`|`2.08μs - 2.4μs`|
|Array.includes()|`131072`|`16.78μs ± 32.86ns`|`17.12μs`|`16.62μs - 17.12μs`|
##### count unique items
|case|runs|mean|p99|range|
|-|-|-|-|-|
|Set direct assign|`131072`|`1.18μs ± 8.27ns`|`1.26μs`|`1.14μs - 1.26μs`|
|Set|`131072`|`1.23μs ± 19.96ns`|`1.41μs`|`1.14μs - 1.41μs`|
|Array.includes()|`131072`|`16.83μs ± 40.47ns`|`17.2μs`|`16.44μs - 17.2μs`|
# coroutine
## overhead
|case|runs|mean|p99|range|
|-|-|-|-|-|
|await non-promise|`524288`|`144.73ns ± 1.67ns`|`248.28ns`|`108.5ns - 251.9ns`|
|generator|`524288`|`158.76ns ± 1.98ns`|`266.1ns`|`136.07ns - 268.22ns`|
|await promise|`524288`|`177.88ns ± 12.63ns`|`928.16ns`|`26.01ns - 1.07μs`|
|async generator|`524288`|`742.17ns ± 7.05ns`|`1.29μs`|`712.45ns - 1.37μs`|
## async iterable
### from promises
|case|runs|mean|p99|range|
|-|-|-|-|-|
|iterator|`131072`|`1.3μs ± 23.63ns`|`1.6μs`|`991.45ns - 1.6μs`|
|generator|`131072`|`2.16μs ± 70.01ns`|`4.07μs`|`2.01μs - 4.07μs`|
# lru
## capacity 8
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`159.06ns ± 1.46ns`|`233.26ns`|`137.58ns - 240.11ns`|`159.06ns ± 84.13ns`|`1.33μs`|`1.04μs - 1.37μs`|
|map|`524288`|`200.41ns ± 7.07ns`|`304.91ns`|`159.64ns - 1.04μs`|`200.41ns ± 80.54ns`|`1.42μs`|`1.02μs - 1.68μs`|
|linked list map|`524288`|`220.05ns ± 1.68ns`|`330.18ns`|`194.36ns - 330.82ns`|`220.05ns ± 79.31ns`|`1.25μs`|`1.05μs - 1.35μs`|
|two object buckets|`524288`|`277.42ns ± 1.85ns`|`372.81ns`|`252.43ns - 431.11ns`|`277.42ns ± 74.32ns`|`1.44μs`|`1.05μs - 1.44μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`24.43ns ± 424.03ps`|`36.96ns`|`12.38ns - 58.45ns`|`24.43ns ± 105.66ns`|`1.34μs`|`1.08μs - 1.35μs`|
|linked list map|`524288`|`30.04ns ± 495.52ps`|`58.52ns`|`14.47ns - 59.49ns`|`30.04ns ± 104.07ns`|`1.29μs`|`1.15μs - 1.29μs`|
|two map buckets|`524288`|`36.75ns ± 488.19ps`|`53.21ns`|`20.56ns - 68.41ns`|`36.75ns ± 96.95ns`|`1.2μs`|`1.06μs - 1.22μs`|
|two object buckets|`524288`|`48.37ns ± 423.24ps`|`59.77ns`|`41.38ns - 72.11ns`|`48.37ns ± 95.35ns`|`1.24μs`|`1.06μs - 1.25μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`61.33ns ± 430.08ps`|`76.4ns`|`55.72ns - 78.41ns`|`61.33ns ± 94.62ns`|`1.24μs`|`1.07μs - 1.3μs`|
|two object buckets|`524288`|`86.75ns ± 434.76ps`|`106.62ns`|`79.89ns - 113.88ns`|`86.75ns ± 91.86ns`|`1.2μs`|`1.06μs - 1.2μs`|
|map|`524288`|`95.08ns ± 839.91ps`|`124.8ns`|`79.53ns - 129.19ns`|`95.08ns ± 93.87ns`|`1.28μs`|`1.05μs - 1.49μs`|
|linked list map|`524288`|`122.8ns ± 663.49ps`|`146.66ns`|`98.17ns - 152.76ns`|`122.8ns ± 92.02ns`|`1.3μs`|`1.07μs - 1.32μs`|
## capacity 64
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`183.44ns ± 870.9ps`|`238.77ns`|`173.3ns - 242.78ns`|`183.44ns ± 83.47ns`|`1.19μs`|`1.07μs - 1.21μs`|
|linked list map|`524288`|`245.22ns ± 1.31ns`|`287.37ns`|`234.88ns - 391.01ns`|`245.22ns ± 78.52ns`|`1.2μs`|`1.07μs - 1.22μs`|
|two object buckets|`524288`|`281.2ns ± 1.41ns`|`314.95ns`|`269.63ns - 444.46ns`|`281.2ns ± 74.8ns`|`1.2μs`|`1.06μs - 1.21μs`|
|map|`524288`|`291.58ns ± 3.81ns`|`377.99ns`|`228.21ns - 389ns`|`291.58ns ± 72.01ns`|`1.19μs`|`1.03μs - 1.21μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`26.89ns ± 462.37ps`|`38.74ns`|`21.67ns - 71.08ns`|`26.89ns ± 107.01ns`|`1.33μs`|`1.17μs - 1.36μs`|
|linked list map|`524288`|`27ns ± 454.22ps`|`57.47ns`|`23.63ns - 66.48ns`|`27ns ± 105.39ns`|`1.36μs`|`1.08μs - 1.43μs`|
|two map buckets|`524288`|`44.85ns ± 512.66ps`|`71.89ns`|`37.42ns - 74.6ns`|`44.85ns ± 96.89ns`|`1.22μs`|`1.08μs - 1.23μs`|
|two object buckets|`524288`|`53.47ns ± 484.68ps`|`67.1ns`|`44.83ns - 89.34ns`|`53.47ns ± 96.48ns`|`1.23μs`|`1.07μs - 1.51μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`64.8ns ± 386.31ps`|`80.18ns`|`59.27ns - 93.31ns`|`64.8ns ± 94.36ns`|`1.22μs`|`1.07μs - 1.26μs`|
|two object buckets|`524288`|`84.62ns ± 588.81ps`|`102.34ns`|`58.85ns - 129.3ns`|`84.62ns ± 92.73ns`|`1.22μs`|`1.07μs - 1.25μs`|
|map|`524288`|`114.86ns ± 783.11ps`|`143.75ns`|`91.22ns - 175.05ns`|`114.86ns ± 89.54ns`|`1.21μs`|`1.07μs - 1.22μs`|
|linked list map|`524288`|`122.91ns ± 956.04ps`|`160.83ns`|`111.44ns - 161.2ns`|`122.91ns ± 90.53ns`|`1.23μs`|`1.07μs - 1.35μs`|
## capacity 512
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`158.19ns ± 2.36ns`|`257.06ns`|`129.61ns - 268.92ns`|`158.19ns ± 86.88ns`|`1.25μs`|`1.08μs - 1.34μs`|
|linked list map|`524288`|`214.45ns ± 1.7ns`|`308.88ns`|`192.42ns - 355.58ns`|`214.45ns ± 84.53ns`|`1.26μs`|`1.09μs - 1.29μs`|
|two object buckets|`524288`|`267.54ns ± 3.77ns`|`421.01ns`|`225.35ns - 445.98ns`|`267.54ns ± 80.92ns`|`1.58μs`|`1.1μs - 1.64μs`|
|map|`524288`|`422.28ns ± 4.32ns`|`531.96ns`|`357.97ns - 535.24ns`|`422.28ns ± 63.25ns`|`1.2μs`|`1.06μs - 1.2μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|map|`524288`|`37.09ns ± 476.28ps`|`49.56ns`|`32.94ns - 77.15ns`|`37.09ns ± 106.54ns`|`1.3μs`|`1.17μs - 1.31μs`|
|linked list map|`524288`|`37.21ns ± 460.14ps`|`63.44ns`|`24.46ns - 72.28ns`|`37.21ns ± 107.52ns`|`1.38μs`|`1.17μs - 1.38μs`|
|two map buckets|`524288`|`57.19ns ± 800.25ps`|`86.56ns`|`49.66ns - 91.47ns`|`57.19ns ± 99.13ns`|`1.25μs`|`1.1μs - 1.26μs`|
|two object buckets|`524288`|`62.08ns ± 387.95ps`|`73.44ns`|`55.79ns - 90.97ns`|`62.08ns ± 98.84ns`|`1.29μs`|`1.11μs - 1.31μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`63.78ns ± 367.61ps`|`80.65ns`|`60.77ns - 92.25ns`|`63.78ns ± 101.6ns`|`1.31μs`|`1.13μs - 1.34μs`|
|two object buckets|`524288`|`84.46ns ± 757.8ps`|`131.02ns`|`77.84ns - 155.64ns`|`84.46ns ± 97.53ns`|`1.3μs`|`1.11μs - 1.34μs`|
|linked list map|`524288`|`126.47ns ± 806.61ps`|`162.86ns`|`117.07ns - 167.45ns`|`126.47ns ± 96.73ns`|`1.31μs`|`1.16μs - 1.56μs`|
|map|`524288`|`272.88ns ± 649.05ps`|`293.97ns`|`246.94ns - 303.22ns`|`272.88ns ± 81.7ns`|`1.39μs`|`1.12μs - 1.4μs`|
## capacity 4096
### set new key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`185.02ns ± 2.85ns`|`312.92ns`|`150.75ns - 314.78ns`|`185.02ns ± 97.83ns`|`1.37μs`|`1.19μs - 1.38μs`|
|linked list map|`524288`|`282.29ns ± 4.64ns`|`476.17ns`|`233.48ns - 517.98ns`|`282.29ns ± 89ns`|`1.43μs`|`1.21μs - 1.44μs`|
|two object buckets|`524288`|`305.07ns ± 6.13ns`|`570.2ns`|`257.94ns - 574.8ns`|`305.07ns ± 95.86ns`|`1.49μs`|`1.28μs - 1.5μs`|
|map|`524288`|`1.63μs ± 6.93ns`|`1.89μs`|`1.48μs - 2.18μs`|`1.63μs ± 26.51ns`|`1.54μs`|`1.2μs - 2.26μs`|
### get non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two object buckets|`524288`|`25.54ns ± 357.74ps`|`40.89ns`|`23.82ns - 63.76ns`|`25.54ns ± 134.3ns`|`1.7μs`|`1.41μs - 1.75μs`|
|two map buckets|`524288`|`28.71ns ± 492.04ps`|`65.54ns`|`25.93ns - 70.78ns`|`28.71ns ± 138.22ns`|`1.74μs`|`1.44μs - 1.9μs`|
|linked list map|`524288`|`56.84ns ± 389.73ps`|`72.75ns`|`52.96ns - 86.8ns`|`56.84ns ± 122.67ns`|`1.65μs`|`1.33μs - 1.68μs`|
|map|`524288`|`115.48ns ± 609.93ps`|`143.53ns`|`108.59ns - 170.39ns`|`115.48ns ± 111.11ns`|`1.49μs`|`1.27μs - 1.58μs`|
### update non-expired key
|case|runs|mean|p99|range|gc mean|gc p99|gc range|
|-|-|-|-|-|-|-|-|
|two map buckets|`524288`|`44.85ns ± 340.37ps`|`51.72ns`|`31.61ns - 77.33ns`|`44.85ns ± 156.61ns`|`2.07μs`|`1.58μs - 2.18μs`|
|two object buckets|`524288`|`50.82ns ± 341.26ps`|`59.68ns`|`48.55ns - 83.07ns`|`50.82ns ± 141.29ns`|`1.77μs`|`1.48μs - 1.86μs`|
|linked list map|`524288`|`60.22ns ± 469.84ps`|`84.86ns`|`55.89ns - 98.36ns`|`60.22ns ± 137.27ns`|`1.85μs`|`1.43μs - 1.88μs`|
|map|`524288`|`115.45ns ± 504.16ps`|`127.64ns`|`108.49ns - 148.12ns`|`115.45ns ± 126.62ns`|`1.73μs`|`1.41μs - 2.01μs`|

