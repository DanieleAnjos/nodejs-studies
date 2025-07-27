# 🛒 Carrinho de Compras Shopee – Projeto em JavaScript

Este projeto é uma simulação de um carrinho de compras inspirado na Shopee, desenvolvido em JavaScript para ser executado no terminal. O objetivo é permitir que o usuário adicione, visualize e remova itens do carrinho, com cálculo automático de subtotal por item.

---

## 🎯 Objetivo

Criar um carrinho de compras baseado no da Shopee, onde:
- Itens possam ser adicionados com nome, preço e quantidade.
- O subtotal de cada item (preço × quantidade) seja calculado automaticamente.
- O usuário possa visualizar todos os itens no carrinho com os totais.
- O usuário consiga remover itens do carrinho de forma simples.

---

## 🚀 Como Executar

1. **Clone o projeto:**
```bash
git clone
```

2. **Execute o arquivo principal:**
```bash
node src\index.js
```

---

## 📋 Passo a Passo da Implementação

1. **Criação do array `cart`** para armazenar os itens do carrinho como objetos com `name`, `price`, `quantity` e função `subtotal()`.
2. **Função para adicionar itens**, recebendo dados do usuário e calculando subtotal automaticamente.
3. **Função `displayCart()`** que exibe os itens formatados no terminal, com índice visual, nome, preço, quantidade e subtotal.
4. **Função `removeItem()`** que permite ao usuário remover um item com base no número exibido no console. O índice visual é ajustado para o índice real do array.
5. **Tratamento de erros e mensagens amigáveis**, como avisos para índice inválido ao tentar remover.

---

