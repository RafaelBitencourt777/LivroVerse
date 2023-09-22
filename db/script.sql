create database livroverse_DB;

use livroverse_DB;

CREATE TABLE tb_categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nm_categoria VARCHAR(500)
);

CREATE TABLE tb_avaliacao (
    id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
    ds_avaliacao DECIMAL(2, 1)
);

CREATE TABLE tb_produto (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    id_categoria INT,
    id_avaliacao INT,
    nm_produto VARCHAR(500),
    vl_preco_fis DECIMAL(10, 2),
    ds_desc VARCHAR(5000),
    vl_preco_pdf DECIMAL(10, 2),
    vl_preco_kindle DECIMAL(10, 2),
    vl_preco_promocional DECIMAL(10, 2),
    bt_destaque BOOLEAN,
    bt_promocao BOOLEAN,
    bt_disponivel BOOLEAN,
    qtd_estoque INT,
    bl_favorito BOOLEAN,
    FOREIGN KEY (id_categoria) REFERENCES tb_categoria(id_categoria),
    FOREIGN KEY (id_avaliacao) REFERENCES tb_avaliacao(id_avaliacao)
);

CREATE TABLE tb_produto_img (
    id_produto_img INT PRIMARY KEY AUTO_INCREMENT,
    id_produto INT,
    img_produto VARCHAR(4000),
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);

CREATE TABLE TB_assinatura (
    id_assinatura INT PRIMARY KEY AUTO_INCREMENT,
    ds_assinatura VARCHAR(50)
);

CREATE TABLE TB_Pagamento (
    id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    ds_Pagamento VARCHAR(50)
);

CREATE TABLE TB_Cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    id_assinatura INT,
    nm_cliente VARCHAR(150),
    ds_telefone VARCHAR(25),
    ds_email VARCHAR(150),
    ds_cpf VARCHAR(50),
    ds_senha VARCHAR(50),
    FOREIGN KEY (id_assinatura) REFERENCES TB_assinatura(id_assinatura)
);

CREATE TABLE tb_Cliente_endereco (
    id_enderecos_salvo INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    ds_cep INT,
    ds_endereco VARCHAR(120),
    nr_numero INT,
    ds_cidade VARCHAR(50),
    ds_bairo VARCHAR(100),
    ds_referencia VARCHAR(120),
    FOREIGN KEY (id_cliente) REFERENCES TB_Cliente(id_cliente)
);

CREATE TABLE TB_pedido (
    id_Pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_pagamento INT,
    id_cliente INT,
    id_endereco_cliente INT,
    FOREIGN KEY (id_pagamento) REFERENCES TB_Pagamento(id_pagamento),
    FOREIGN KEY (id_cliente) REFERENCES TB_Cliente(id_cliente),
    FOREIGN KEY (id_endereco_cliente) REFERENCES tb_Cliente_endereco(id_enderecos_salvo)
);

CREATE TABLE tb_pedido_item (
    id_pedido_item INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT,
    id_produto INT,
    id_endereco_cliente INT,
    ds_pedido_item VARCHAR(500),
    FOREIGN KEY (id_pedido) REFERENCES TB_pedido(id_Pedido),
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto),
    FOREIGN KEY (id_endereco_cliente) REFERENCES tb_Cliente_endereco(id_enderecos_salvo)
);

CREATE TABLE tb_admin (
    id_admin INT PRIMARY KEY AUTO_INCREMENT,
    ds_email VARCHAR(100),
    ds_senha VARCHAR(10)
);
