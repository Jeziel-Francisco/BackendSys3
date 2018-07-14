/**@api {post} /api/v1/address Cadastro Endereço
 * @apiGroup Endereço
 * 
 * @apiSuccess {
 *      id?: number;
 *      cep?: string;
 *      place?: string;
 *      neighborhood?: string;
 *      number?: string;
 *      complement?: string;
 *      note?: string;
 *      active?: boolean;
 *      personId?: number;
 *      cityId?: number;
 *      createdAt?: string;
 *      updatedAt?: string;
 *      companyId?: number;
 *  } Retorno  Retorno Endereço cadastrado
 *  Http Status 200 OK
 * 
 */