const people = [
    {
      name: '-- --',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://img.freepik.com/fotos-gratis/balao-unico-azul-com-um-cordao_53876-123018.jpg?t=st=1717467007~exp=1717470607~hmac=07c5066d5b6a98ee4d8c5c67e97ad1e865cd470857f1febb3f8545b36353dd9d&w=826',
    },
    {
        name: 'José Amaral',
        role: 'Co-Founder / Gestor de Projetos',
        imageUrl:
          'https://img.freepik.com/fotos-gratis/balao-unico-azul-com-um-cordao_53876-123018.jpg?t=st=1717467007~exp=1717470607~hmac=07c5066d5b6a98ee4d8c5c67e97ad1e865cd470857f1febb3f8545b36353dd9d&w=826',
      },
      {
        name: 'João Capango',
        role: 'Co-Founder / DR. Administrativo',
        imageUrl:
          'https://img.freepik.com/fotos-gratis/balao-unico-azul-com-um-cordao_53876-123018.jpg?t=st=1717467007~exp=1717470607~hmac=07c5066d5b6a98ee4d8c5c67e97ad1e865cd470857f1febb3f8545b36353dd9d&w=826',
      },
      {
        name: 'Patrícia Argentino',
        role: 'Gestora de Redes Sociais',
        imageUrl:
          'https://img.freepik.com/fotos-gratis/balao-unico-azul-com-um-cordao_53876-123018.jpg?t=st=1717467007~exp=1717470607~hmac=07c5066d5b6a98ee4d8c5c67e97ad1e865cd470857f1febb3f8545b36353dd9d&w=826',
      },
      {
        name: 'Alcino Simuanga',
        role: 'Designer Gráfico',
        imageUrl:
          'https://img.freepik.com/fotos-gratis/balao-unico-azul-com-um-cordao_53876-123018.jpg?t=st=1717467007~exp=1717470607~hmac=07c5066d5b6a98ee4d8c5c67e97ad1e865cd470857f1febb3f8545b36353dd9d&w=826',
      },
      {
        name: '-- --',
        role: 'Contabilista',
        imageUrl:
          'https://img.freepik.com/fotos-gratis/balao-unico-azul-com-um-cordao_53876-123018.jpg?t=st=1717467007~exp=1717470607~hmac=07c5066d5b6a98ee4d8c5c67e97ad1e865cd470857f1febb3f8545b36353dd9d&w=826',
      },
      {
        name: '-- --',
        role: 'Analista Programador',
        imageUrl:
        'https://img.freepik.com/fotos-gratis/balao-unico-azul-com-um-cordao_53876-123018.jpg?t=st=1717467007~exp=1717470607~hmac=07c5066d5b6a98ee4d8c5c67e97ad1e865cd470857f1febb3f8545b36353dd9d&w=826'
      },
      {
        name: '-- --',
        role: 'Programador & Ciêntista de Dados',
        imageUrl:
        'https://img.freepik.com/fotos-gratis/balao-unico-azul-com-um-cordao_53876-123018.jpg?t=st=1717467007~exp=1717470607~hmac=07c5066d5b6a98ee4d8c5c67e97ad1e865cd470857f1febb3f8545b36353dd9d&w=826'
      },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça Nosso Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Profissionais experientes e certificados em cada área de serviço, garantindo resultados de alta qualidade.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full object-cover" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  