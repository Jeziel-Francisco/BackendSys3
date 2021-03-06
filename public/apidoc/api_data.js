define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/address",
    "title": "Cadastro Endereço",
    "group": "Endere_o",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Retorno",
            "description": "<p>do endereço cadastrado Http Status 200 OK { id?: number; cep?: string; place?: string; neighborhood?: string; number?: string; complement?: string; note?: string; active?: boolean; personId?: number; cityId?: number; createdAt?: string; updatedAt?: string; companyId?: number; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./dist/docs/docs.js",
    "groupTitle": "Endere_o",
    "name": "PostApiV1Address"
  }
] });
