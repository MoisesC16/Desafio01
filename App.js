import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';



const DATA = [
  {
    id: '1',
    title: 'MERCURIO',
    description: 'Con un tamaño tan solo un poco mayor al de nuestra luna, es el planeta más pequeño del sistema solar y el más cercano al Sol.',
    src:require('./src/img/Mercurio.png'),
  },
  {
    id: '2',
    title: 'VENUS',
    description: 'Solo tras el Sol y la Luna, Venus es el objeto más brillante que se puede ver en el firmamento desde la Tierra.',
    src:require('./src/img/Venur.png'),
  },
  {
    id: '3',
    title: 'TIERRA',
    description: 'Nuestro hogar, la Tierra, es el quinto planeta más grande y el tercero en cercanía al Sol del sistema solar.',
    src:require('./src/img/Tierra.png'),
  },
  {
    id: '4',
    title: 'MARTE',
    description: 'Marte, también conocido como el planeta Rojo, es el más alejado del Sol de los cuatro planetas rocosos del sistema solar, y el segundo más cercano a la Tierra.',
    src:require('./src/img/Marte.png'),
  },
  {
    id: '5',
    title: 'JÚPITER',
    description: 'Es el planeta más grande del sistema solar por lo que recibe su nombre del dios entre los dioses del Olimpo, Zeus; Júpiter en la mitología romana.',
    src:require('./src/img/Jupiter.png'),
  },
  {
    id: '6',
    title: 'SATURNO',
    description: 'Saturno es el sexto planeta en distancia al sol del sistema solar. También se trata del segundo planeta más grande (9 planetas Tierra en fila cabrían a lo largo de la línea de su ecuador).',
    src:require('./src/img/Saturno.png'),
  },
  {
    id: '7',
    title: 'URANO',
    description: 'Urano es el séptimo planeta en distancia al sol, el tercero más grande, el cuarto más masivo y el segundo menos denso del sistema solar. Se trata del primero de los gigantes helados de nuestro sistema planetario y está compuesto por una especie de "hielo" fluido de agua, amoníaco y metano.',
    src:require('./src/img/Urano.png'),
  },
  {
    id: '8',
    title: 'NEPTUNO',
    description: 'Oscuro, frío y regido por vientos supersónicos, el gigante de hielo Neptuno es el octavo y más distante planeta de nuestro sistema solar. Está tan lejos que es el único de los planetas que no es visible desde la Tierra a simple vista.',
    src:require('./src/img/Neptuno.png'),
  },
  {
    id: '9',
    title: 'ALFA CENTAURI',
    description: 'Alfa Centauri, también conocido como Rigil Kent, es el sistema estelar más cercano a la tierra, considerado desde la antigüedad como una sola estrella y con gran importancia mitológica, la más brillante de la constelación de Centauro.',
    src:require('./src/img/Estrellas.jpg'),
  },
  {
    id: '10',
    title: 'BARNARD',
    description: 'Se encuentra en la constelación de Ofiuco y es demasiado tenue para ser observada sin telescopio. Alrededor de ella orbitan varios planetas gaseosos. Es una estrella antigua, pero experimenta llamaradas como las estrella fulgurantes.',
    src:require('./src/img/Estrellas.jpg'),
  },
  {
    id: '11',
    title: 'WOLF 359',
    description: 'Es la tercera estrella más cercana, después del sistema estelar Alfa Centauri y la estrella de Barnard, a parte el sol. Se encuentra en la constelación de Leo y es totalmente invisible al ojo humano sin ayuda de la óptica.',
    src:require('./src/img/Estrellas.jpg'),
  },
  {
    id: '12',
    title: 'LALANDE 21185',
    description: 'Es la quinta estrella más cercana a la Tierra, no es visible a simple vista, aunque sí con cualquier telescopio pequeño.',
    src:require('./src/img/Estrellas.jpg'),
  },
  {
    id: '13',
    title: 'SIRIO',
    description: 'Es el nombre propio de la estrella Alfa Canis Maioris, la más brillante de todo el cielo nocturno visto desde la Tierra, situada en la constelación del hemisferio de celeste sur Canis Mior.',
    src:require('./src/img/Estrellas.jpg'),
  },
  {
    id: '14',
    title: 'LUYTEN 726-8',
    description: 'Es el séptimo sistema solar más cercano, situado a 8,73 años luz de distancia. Se trata de un sistema binario, compuesto por Luyten 726-8 A, estrella del tipo fulgurante, también llamada BL Ceti y Luyten 726-B, también una estrella fulgurante, así mismo llamada UV Ceti.',
    src:require('./src/img/Estrellas.jpg'),
  },
  {
    id: '15',
    title: 'ROSS 154',
    description: 'Es actualmente la octava estrella más cercana a una distancia de 9.68 años luz. No es visible a simple vista. Se encuentra en la constelación de Sagitario. Es una estrella del tipo enana roja y su masa no supera el 17% de la masa de nuestro sol. Su velocidad de rotación, indica que es una estrella joven.',
    src:require('./src/img/Estrellas.jpg'),
  },

];

const Item = ({ title, description, img}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Image style={styles.img} source={img}/>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} description={item.description} img={item.src}/> ;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>ASTRONOMIA</Text>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#2B4865",
  },
  item: {
    backgroundColor: '#8FE3CF',
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    bottom: 10,
    left: 60,
    fontSize: 30,
    color: '#002B5B',
    fontWeight: 'bold',
    textShadowColor: "#fff" ,
    textShadowRadius: 10,
  },
  description: {
    top: 30,
    textAlign: 'justify',
    fontSize: 16,
    color: '#256D85',
  },
  img: {
    width:100,
    height:70,
    borderWidth:2,
    resizeMode: 'contain',
    float: 'rigth',
    padding: 25,
    position: 'absolute',
    top: 25,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 42,
    textAlign: 'center',
    padding: 5,
    backgroundColor: "#002B5B",
    color: "#fff"
  },
});

export default App;