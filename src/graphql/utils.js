type Type = 'String' | 'Int' | 'String!' | 'Int!';

type Output = {
    name: string,
    include: [Output]
}

type Query = {
  inputs: {
      [key: string]: Type;
  },
  outputs: [Output]
}

const getQuery = ({inputs, name, outputs}) => {

}
