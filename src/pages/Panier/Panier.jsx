import { useState, useEffect } from 'react'
import { Table, Space } from 'antd';

function Panier() {
  const [panier, setPanier] = useState([])

  const fetchPanier = async () => {
    const response = await fetch('http://localhost:5000/panier')
    const data = await response.json()
    // console.log(data)
    setPanier(data)
  }
  console.log(panier)
  useEffect(() => {
    fetchPanier()
  }, [])

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      render: text => <img style={{width:'60px',height:'60px'}}src={text}/>
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Quantité',
      dataIndex: 'quantite',
      key: 'quantite',
    },
    {
      title: 'Prix',
      key: 'prix',
      dataIndex: 'prix',
    },
    {
      title: 'Ajouter/Supprimer',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = panier.map((commande, index) => ({
    key: index,
    product: commande.picture,
    description: commande.name,
    quantite: 1,
    prix: commande.price


  }))

  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default Panier
