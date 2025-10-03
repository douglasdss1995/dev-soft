interface Usuario {
  nome: string;
  idade: number;
  email: string;
  ativo: boolean;
}

const usuario: Usuario = {
  nome: "Ana",
  idade: 28,
  email: "ana@email.com",
  ativo: true,
};

// Iterando sobre as chaves do objeto
for (const propriedade in usuario) {
  const chave = propriedade as keyof Usuario;
  console.log(`${chave}: ${usuario[chave]}`);
}

// Versão mais type-safe
for (const chave in usuario) {
  if (usuario.hasOwnProperty(chave)) {
    const propriedade = chave as keyof Usuario;
    console.log(`${propriedade}: ${usuario[propriedade]}`);
  }
}
