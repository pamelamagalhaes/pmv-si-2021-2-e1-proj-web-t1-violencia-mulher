function ExibeResultado() { 
    var selecao = document.getElementById("selecaoCidade");
    var cidade = selecao.options[selecao.selectedIndex].value;

    switch (cidade) {
        case "1":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Alfenas";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Dom Silvério, nº 338, Bairro Jardim Boa Esperança V, Alfenas";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37130-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: regional.alfenas@gmail.com";
        break;

        case "2":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Araguari";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua José do Patrocínio, nº 291, Bairro Centro, Araguari";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39100-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: rosangela200520010@hotmail.com";
        break;

        case "3":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Araxá";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Calimério Guimarães, nº 515, Bairro Centro, Araxá";
        document.getElementById("resultado-cep").innerHTML = "CEP: 38183-184";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        break;
        
        case "4":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Barbacena";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Vitório Meneghin, nº 210, Bairro Pontilhão, Barbacena";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36202-346";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: delegaciademulheres.barbacena@pc.mg.gov.br";
        break;

        case "5":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Belo Horizonte - Plantão Especializado";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Barbacena, nº 288, Bairro Barro Preto, Belo Horizonte";
        document.getElementById("resultado-cep").innerHTML = "CEP: 30190-130";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: coordenacaodemid@gmail.com";
        break;

        case "6":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Betim";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Cecília Júlia do Prado, nº 255, Bairro Centro, Betim";
        document.getElementById("resultado-cep").innerHTML = "CEP: 32510-550";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deopf.betim@pc.mg.gov.br";
        break;

        case "7":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Caratinga";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Antônia Maria Resende Fernandes, nº 174, Bairro Dário Grossi, Caratinga";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35300-011";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: nayaratravassos@bol.com.br";
        break;

        case "8":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Cataguases";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Major Viêira, nº 324, Bairro Sereno, Cataguases";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36770-060";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: secretariacataguases.pc@gmail.com";
        break;

        case "9":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Conselheiro Lafaiete";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Praça Pimentel Duarte, sem nº, Bairro Centro, Conselheiro Lafaiete";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36400-079";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: mulheres.lafaiete@pc.mg.gov.br";
        break;

        case "10":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Contagem";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Manoel Teixeira de Camargos, nº 63, Bairro da Glória, Contagem";
        document.getElementById("resultado-cep").innerHTML = "CEP: 32340-040";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: mulheres.contagem@pc.mg.gov.br";
        break;

        case "11":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Coronel Fabriciano";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Albert Scharlet, nº 213, Bairro Centro, Coronel Fabriciano";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35170-038";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: delegaciademulheres.cf@hotmail.com";
        break;

        case "12":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Diamantina";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida João Antunes de Oliveira, nº 284, Bairro Cazuza, Diamantina";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39100-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deam.diamantina@pc.mg.br";
        break;

        case "13":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Divinópolis";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Henrique Galvão, nº 274, Bairro Espirito Santo, Divinópolis";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35500-256";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deam.gv@pc.mg.gov.br";
        break;

        case "14":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Formiga";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Zica Frade, nº 55, Formiga";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35570-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: drpc.formiga@pc.mg.gov.br";
        break;

        case "15":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Governador Valadares";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Pedro Lessa, nº 836, Bairro Lourdes, Governador Valadares";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35030-440";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: informacao.deamibirite@gmail.com";
        break;

        case "16":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Guaxupé";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Dona Floriana, nº 272, Bairro Centro, Guaxupé";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37800-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: cpd.guaxupe@pc.mg.gov.br";
        break;

        case "17":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ibirite";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Otacílio Negrão de Lima, nº 468, Bairro Aluoto, Ibirité";
        document.getElementById("resultado-cep").innerHTML = "CEP: 32400-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: liathayde1@hotmail.com";
        break;

        case "18":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ipatinga";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Pedras Preciosas, nº 775, Bairro Iguaçu, Ipatinga";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35162-106";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        break;

        case "19":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Itabira";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Carlos Drumond de Andrade, Bairro Centro, Itabira";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35900-024";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: regional.itabira@pc.mg.gov.br";
        break;

        case "20":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Itabirito";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Emídio Quites, nº 136, Bairro Praia, Itabirito";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35450-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: ronni.fonseca@pc.mg.gov.br";
        break;

        case "21":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Itajubá";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Antônio Simão Mauad, nº 149 e 303 - 3º Andar, Bairro Centro, Itajubá";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37500-180";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deam.itajuba@pc.mg.gov.br";
        break;

        case "22":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Itaúna";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Praça Doná Macrina, Bairro Graças, Itaúna";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35680-339";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: delmulheres.itauna@pc.mg.gov.br";
        break;

        case "23":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ituiutaba";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida João Antunes de Oliveira, nº 284, Bairro Cazuza, Ituiutaba";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39100-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: secretaria.ituiutaba@pc.mg.gov.br";
        break;

        case "24":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Janaúba";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Espinosa, nº 105, Bairro Novo Paraíso, Janaúba";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39440-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: dccm.janauba@pc.mg.gov.br";
        break;

        case "25":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Januária";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Marechal Euríco Gáspar Dutra, nº 484, Bairro Centro, Januária";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39480-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: gto.fam.jf@pc.mg.gov.br";
        break;

        case "26":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em João Monlevade";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Louis Ensch, nº 266, Bairro Alvorada, João Monlevade";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35930-045";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: assessoriamonlevade@yahoo.com.br";
        break;

        case "27":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Juiz De Fora";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Uruguaiana, nº 94 - 2º Andar, Bairro Jardim Glória, Juiz de Fora";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36015-020";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: lujanpsouza@hotmail.com";
        break;

        case "28":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Lavras";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: BR-265, nº 215, Bairro Serra Verde, Lavras";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37200-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        break;

        case "29":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Manhuaçu";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Melo Vianna, nº 222, Bairro Bom Pastor, Manhuaçu";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36900-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: camilasoaresteixeira@yahoo.com.br";
        break;

        case "30":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Montes Claros";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Vicente Guimarães, nº 381, Bairro Sagrada Família, Montes Claros";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39400-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: delegaciamulheres@yahoo.com.br";
        break;

        case "31":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Muriaé";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua José Freitas Lima, nº 02 (referência: ao lado do Batalhão da Polícia Militar), Bairro Safira, Muriaé";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36880-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: cpd.muriae@policiacivil.mg.gov.br";
        break;

        case "32":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Nova Lima";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Joviano de Assis Fonseca, nº 41, Bairro Cariocas, Nova Lima";
        document.getElementById("resultado-cep").innerHTML = "CEP: 34000-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: 1dpnovalima@gmail.com";
        break;

        case "33":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Pará De Minas";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Praça Afonso Pena, nº 55, Bairro Centro, Pará de Minas";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35660-049";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: anableao@yahoo.com.br";
        break;

        case "34":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Passos";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Santo Onófre, nº 174, Bairro Canjeranus, Passos";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37900-504";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: arianepcmg@gmail.com";
        break;

        case "35":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Patos De Minas";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua dos Carajas, nº 641 - 1º Andar, Bairro Caiçaras, Patos de Minas";
        document.getElementById("resultado-cep").innerHTML = "CEP: 38703-236";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: mulheres.patosdeminas@pc.mg.gov.br";
        break;

        case "36":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Patrocínio";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Heloísa Capuano, nº 816, Bairro Cidade Jardim, Patrocínio";
        document.getElementById("resultado-cep").innerHTML = "CEP: 38747-508";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: chcartorio@pcivil.mg.gov.br";
        break;

        case "37":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Pedro Leopoldo";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Santa Luzia, nº 477, Bairro Centro, Pedro Leopoldo";
        document.getElementById("resultado-cep").innerHTML = "CEP: ";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: aisp71.igesp@pc.mg.gov.br";
        break;

        case "38":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Pirapora";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Benjamin Constant, nº 183, Bairro Centro, Pirapora";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39270-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: regional.pirapora@pc.mg.gov.br";
        break;

        case "39":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Poços De Caldas";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida José Remígio Prezia, nº 492, Bairro Jardim dos Estados, Poços de Caldas";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37701-102";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: cartorio.deam@pc.mg.gov.br";
        break;

        case "40":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ponte Nova";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Felisberto Leopoldo, nº 252, Bairro Santa Teresa, Ponte Nova";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35430-085";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: dmeneguite@yahoo.com.br";
        break;

        case "41":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Pouso Alegre";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Silvestre Ferraz, nº 226, Bairro Centro, Pouso Alegre";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37550-126";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: mulheres@pousoalegre.pcivil.mg.gov.br";
        break;

        case "42":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ribeirão Das Neves";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Luísa Augusta Guimarães, nº 150, Bairro São Pedro, Ribeirão das Neves";
        document.getElementById("resultado-cep").innerHTML = "CEP: 33805-558";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deopf.neves@gmail.com";
        break;

        case "43":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Sabará";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida João Pinheiro da Silva, nº 25, Bairro Esplanada, Sabará";
        document.getElementById("resultado-cep").innerHTML = "CEP: 34515-410";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deamsabara@gmail.com";
        break;

        case "44":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Santa Luzia";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Brasília, nº 3550, Bairro São Benedito Duquesa I, Santa Luzia";
        document.getElementById("resultado-cep").innerHTML = "CEP: 33110-580";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deam.santaluzia@policiacivil.mg.gov.br";
        break;

        case "45":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Frutal";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Olávo Bilac, nº 225, Bairro Nossa Senhora de Fátima, Santa Maria";
        document.getElementById("resultado-cep").innerHTML = "CEP: 97015-440";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: regional.frutal@pc.mg.gov.br";
        break;

        case "46":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Santos Dumont";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Presidente Getúlio Vargas, nº 330, Bairro Centro, Santos Dumont";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36240-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: kenia@barbacena.pcivil.mg.gov.br";
        break;

        case "47":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em São João Del Rei";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Leite de Castro, nº 1322, Bairro Fábricas, São João Del Rei";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36301-180";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: mulher@saojoaodelrei.policiacivil.mg.gov.br";
        break;

        case "48":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em São Lourenço";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Damião Junqueira de Souza, nº 167, São Lourenço";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37470-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: regional.saolourenco@gmail.com";
        break;

        case "49":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em São Sebastião Do Paraíso";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Dárcio Cantieri, nº 1879, Bairro Jardim Coolapa, São Sebastião do Paraíso";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37950-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: cartorioregional.ssparaiso@pc.mg.gov.br";
        break;

        case "50":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia Civil - Atendimento à Mulher em Sete Lagoas";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Jovelino Lanza, nº 1316, Bairro Jardim Arizona, Sete lagoas";
        document.getElementById("resultado-cep").innerHTML = "CEP: 35700-353";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: regional.setelagoas@pc.mg.gov.br";
        break;

        case "51":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Teófilo Otoni";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Lauro Viêira Otoni, nº 20, Bairro São Diogo, Teófilo Otoni";
        document.getElementById("resultado-cep").innerHTML = "CEP: 39803-002";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: veronicazimmere@yahoo.com.br";
        break;

        case "52":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Três Corações";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Deputado Renato Azeredo, nº 1360, Bairro Novo Horizonte, Três Corações";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37410-850";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: cartorio.tcoracoes@pc.mg.gov.br";
        break;

        case "53":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Ubá";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida dos Ex-Combatentes, nº 1333, Ubá";
        document.getElementById("resultado-cep").innerHTML = "CEP: 36500-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: depolmulheres.uba@pc.mg.gov.br";
        break;

        case "54":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Uberaba";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Amaro Ferreira, nº 221, Bairro Fabrício, Uberaba";
        document.getElementById("resultado-cep").innerHTML = "CEP: 38065-170";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: elisabetecardoso@uberabadigital.com.br";
        break;

        case "55":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Uberlândia";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Avenida Nicomedes Alves dos Santos, nº 728, Bairro Morada da Colina, Uberlândia";
        document.getElementById("resultado-cep").innerHTML = "CEP: 38411-106";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: deam.uberlandia@policiacivil.mg.gov.br";
        break;

        case "56":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Unaí";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Alba Gonzaga, nº 54, Bairro Centro, Unaí";
        document.getElementById("resultado-cep").innerHTML = "CEP: 38610-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: valdete@pc.mg.gov.br";
        break;

        case "57":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Varginha";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Praça João Gonzaga, nº 91, Bairro Centro, Varginha";
        document.getElementById("resultado-cep").innerHTML = "CEP: 37002-380";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: cartorio@varginha.pc.mg.gov.br";
        break;

        case "58":
        document.getElementById("resultado-delegacia").innerHTML = "Delegacia da Mulher em Vespasiano";
        document.getElementById("resultado-endereco").innerHTML = "Endereço: Rua Modestino Fonseca Cota, nº 369, Bairro Cond. Mangueiras, Vespasiano";
        document.getElementById("resultado-cep").innerHTML = "CEP: 33200-000";
        document.getElementById("resultado-tel1").innerHTML = "Telefone em caso de emergência: 190 (Polícia Militar)";
        document.getElementById("resultado-tel2").innerHTML = "Telefone da Central de Atendimento à Mulher: 180";
        document.getElementById("resultado-email").innerHTML = "E-mail: gabinete.vespasiano@policiacivil.mg.gov.br";
        break;

        default: "Sua cidade não consta em nossos registros";
    }
}
    


