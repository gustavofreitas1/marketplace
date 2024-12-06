dmx.config({
  "redefinir_senha": {
    "query": [
      {
        "type": "text",
        "name": "token"
      }
    ]
  },
  "empreendimentos": {
    "repeat_empreendimentos": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "localizacao"
        },
        {
          "type": "text",
          "name": "area_total"
        },
        {
          "type": "date",
          "name": "data_inicio"
        },
        {
          "type": "date",
          "name": "data_entrega"
        },
        {
          "type": "text",
          "name": "tipo"
        },
        {
          "type": "number",
          "name": "id_empresa"
        },
        {
          "type": "text",
          "name": "token"
        }
      ],
      "outputType": "array"
    },
    "var_empreendimento": {
      "meta": null,
      "outputType": "object"
    },
    "data_detail_empreendimentos": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "localizacao"
        },
        {
          "type": "text",
          "name": "area_total"
        },
        {
          "type": "date",
          "name": "data_inicio"
        },
        {
          "type": "date",
          "name": "data_entrega"
        },
        {
          "type": "text",
          "name": "tipo"
        },
        {
          "type": "number",
          "name": "id_empresa"
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "localizacao"
        },
        {
          "type": "text",
          "name": "area_total"
        },
        {
          "type": "date",
          "name": "data_inicio"
        },
        {
          "type": "date",
          "name": "data_entrega"
        },
        {
          "type": "text",
          "name": "tipo"
        },
        {
          "type": "number",
          "name": "id_empresa"
        }
      ],
      "outputType": "array"
    }
  },
  "home": {
    "tab": {
      "meta": null,
      "outputType": "object"
    }
  },
  "erp": {
    "query": [
      {
        "type": "text",
        "name": "token_empreendimento"
      }
    ],
    "token": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "nome",
          "type": "text"
        },
        {
          "name": "localizacao",
          "type": "text"
        },
        {
          "name": "area_total",
          "type": "text"
        },
        {
          "name": "data_inicio",
          "type": "date"
        },
        {
          "name": "data_entrega",
          "type": "date"
        },
        {
          "name": "tipo",
          "type": "text"
        },
        {
          "name": "id_empresa",
          "type": "number"
        },
        {
          "name": "token",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "repeat_subetapas": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "orcamento_etapa_id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "text",
          "name": "unidade"
        },
        {
          "type": "text",
          "name": "quantidade"
        },
        {
          "type": "text",
          "name": "preco_unitario"
        }
      ],
      "outputType": "array"
    },
    "repeat_etapa": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "text",
          "name": "valor_total"
        },
        {
          "type": "number",
          "name": "empreendimento_id"
        },
        {
          "name": "subetapa",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "orcamento_etapa_id"
            },
            {
              "type": "text",
              "name": "nome"
            },
            {
              "type": "text",
              "name": "descricao"
            },
            {
              "type": "text",
              "name": "unidade"
            },
            {
              "type": "text",
              "name": "quantidade"
            },
            {
              "type": "text",
              "name": "preco_unitario"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail_subetapa": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "text",
          "name": "valor_total"
        },
        {
          "type": "number",
          "name": "empreendimento_id"
        },
        {
          "name": "subetapa",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "orcamento_etapa_id"
            },
            {
              "type": "text",
              "name": "nome"
            },
            {
              "type": "text",
              "name": "descricao"
            },
            {
              "type": "text",
              "name": "unidade"
            },
            {
              "type": "text",
              "name": "quantidade"
            },
            {
              "type": "text",
              "name": "preco_unitario"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "inputData1": {
      "meta": [],
      "outputType": "array"
    },
    "array": {
      "meta": [],
      "outputType": "array"
    },
    "repeat_solicitacoes": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "number",
          "name": "empreendimento_id"
        },
        {
          "type": "date",
          "name": "data_envio"
        },
        {
          "type": "text",
          "name": "prazo_entrega"
        },
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    },
    "repeat_orcamentos": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "observação"
        },
        {
          "type": "text",
          "name": "valor_total"
        },
        {
          "type": "number",
          "name": "solicitação_id"
        }
      ],
      "outputType": "array"
    }
  }
});
