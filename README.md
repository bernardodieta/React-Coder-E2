#Segunda entrega Proyecto Coder House - React Js 07/12/2023

Detallo la entrega y las consignas:
La app esta utilizando la API Fake Store Api(Nueva pestaña (fakestoreapi.com)).

En el menú de navegación hay 4 secciones HOME – Man Category – Woman Category – Electronic Category.

La sección HOME Obtiene todos los datos de la API sin realizar ningún tipo de filtro.

La sección Man Category solo muestra la ropa para hombres, aquí estoy utilizando el endpoint de la misma API ya que me permite filtrar por categoría, entonces lo aprovecho, pero para no repetir el código de la petición a la API para cada categoría, lo que hice es que al acceder a una categoría en especifico se le pase la categoría a la url que hace la consulta y la concateno y de esta manera reutilizo el código

La sección Woman Category trabaja de la misma forma que Man Category.

Sección detalles de productos, Las secciones de detalles de productos que vengan de Man Category y Woman Category pasan los datos internamente, fue la manera en que lo pude hacer antes de que el profe explicara como hacerlo a través de useParams.

La sección Electronic Category acá trabaja diferente ya que me di cuenta que el profesor lo explico de otra manera entonces aquí aplique la que el profesor explico utilizando un filter y ahí realizando el filtro de categoría electronic.

En la sección detalles de productos de la categoría electronic, aquí si utilice la forma que el profe lo explico con useParams a través de la URL.

