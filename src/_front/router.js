import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"38dd6aaa-dd8d-4fd6-b208-ea826ae19e52","homePageId":"f5504069-f5ab-4094-8588-f5211dc4b3da","authPluginId":"f5856798-485d-47be-b433-d43d771c64e1","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"pt","default":true,"isDefaultPath":false}],"background":{},"workflows":[],"pages":[{"id":"224e6779-0d97-4c0c-a06e-69addfe2ae84","linkId":"224e6779-0d97-4c0c-a06e-69addfe2ae84","name":"Tela perfil Clientes","folder":null,"paths":{"pt":"tela-perfil-clientes/{{user_id|}}","default":"tela-perfil-clientes/{{user_id|}}"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"f74d0df5-41b2-4594-846d-f7c1782eae99","sectionTitle":"Main Content","linkId":"62b76654-f8aa-4b4d-b56b-7108b1495e39"}],"pageUserGroups":[{},{"userGroup":{"id":"9b5a54f4-4ccc-4fee-bd74-3ce1d5790b4a","roles":[{"value":"2f657a19-7fc3-4764-a7cd-80519ecd3083"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"75978b75-ba84-4c79-82f5-36d15104dfb0","linkId":"75978b75-ba84-4c79-82f5-36d15104dfb0","name":"Atualizar Perfil Cliente","folder":null,"paths":{"pt":"atualizar-perfil-cliente","default":"atualizar-perfil-cliente"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"76071663-6e71-4de5-8699-39ea49ab7abd","sectionTitle":"Profile Header Section","linkId":"d2a8feed-82d3-4f35-986d-74cd67e75fab"},{"uid":"41b0021f-8878-4b1d-8994-a852aebd9e8c","sectionTitle":"Profile Content Section","linkId":"818f7798-2237-48a5-b7cf-b97fe952306f"}],"pageUserGroups":[{},{"userGroup":{"id":"9b5a54f4-4ccc-4fee-bd74-3ce1d5790b4a","roles":[{"value":"2f657a19-7fc3-4764-a7cd-80519ecd3083"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bdf2591d-6300-43f6-93f5-298c8de3411c","linkId":"bdf2591d-6300-43f6-93f5-298c8de3411c","name":"Meus Produtos Reservados","folder":null,"paths":{"pt":"meus-produtos-reservados","default":"meus-produtos-reservados"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"7914221d-b336-4cc7-8fff-7bccc7e04243","sectionTitle":"Header Section","linkId":"1c2fd174-83f9-4b86-b236-133b19dbf528"},{"uid":"1716de85-5d99-4371-acbb-8802f6235b4f","sectionTitle":"Main Content","linkId":"c259697b-b183-4f84-9260-3d168d985952"},{"uid":"d2b55539-6cc9-43e3-8c13-a2f98ebeda88","sectionTitle":"Modal Confirmar Cancelamento","linkId":"0d537bc3-92b6-4bd3-8779-d77605891d52"}],"pageUserGroups":[{},{"userGroup":{"id":"9b5a54f4-4ccc-4fee-bd74-3ce1d5790b4a","roles":[{"value":"2f657a19-7fc3-4764-a7cd-80519ecd3083"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"397e0014-fb3e-4f98-ab93-b27c216abb63","linkId":"397e0014-fb3e-4f98-ab93-b27c216abb63","name":"Tela Geral Lojas","folder":null,"paths":{"pt":"tela-geral-lojas","default":"tela-geral-lojas"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"fcf45c86-8b9b-4933-b6d9-ce52123df156","sectionTitle":"Top Nav","linkId":"cb146202-64ed-42f8-9e31-9de8cf6f581d"},{"uid":"578d83ff-256d-46d1-b0e7-a3a120800f87","sectionTitle":"Modal_Login","linkId":"950cdd2c-878a-45ff-a4b6-8a624283c57f"},{"uid":"0c6f2ad7-9561-4469-a674-97ddd57c8f72","sectionTitle":"Modal_Signup","linkId":"3f75fd4b-5426-4013-9dd8-d9a3a74f08fb"},{"uid":"764538b5-7fcc-47ac-a1c1-db0163419481","sectionTitle":"Menu User Logado","linkId":"4c4944db-47f3-408b-bdeb-d16282b30de6"},{"uid":"87dae9df-a48c-4a53-b19b-4033d9f3a091","sectionTitle":"Header Section","linkId":"c8040216-d889-4d8b-848a-a0bb8bc59803"},{"uid":"2b1384bb-04a3-4725-a1ad-eb43f8139c11","sectionTitle":"Main Content","linkId":"e38ce3dd-12af-4d0e-b812-95560172d56a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"825d8343-adcf-44e5-b415-0e42e56316fe","linkId":"825d8343-adcf-44e5-b415-0e42e56316fe","name":"Produtos em Promoção","folder":null,"paths":{"pt":"produtos-em-promocao","default":"produtos-em-promocao"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"3cc50853-acf7-44a9-922b-f17e274a553d","sectionTitle":"Top Nav","linkId":"b9a05a5c-1a78-4166-b527-5f2a855d1971"},{"uid":"316bbdec-9ac6-4fa8-8465-5c2cbcff6e95","sectionTitle":"Modal_Login","linkId":"74375a92-414c-44e3-adbc-2246e16874f4"},{"uid":"d1cc735b-5027-4627-828d-07f2e4a89ed2","sectionTitle":"Modal_Signup","linkId":"1d36d441-ad4d-4c98-934a-abbd783a9f43"},{"uid":"d5b54253-ae97-442f-bb74-14ecc59fe83e","sectionTitle":"Menu User Logado","linkId":"53dc4b73-4a03-4337-9636-df8d93da7b3d"},{"uid":"6225d5ee-ba3a-403b-a50f-0d5837a5787a","sectionTitle":"Header Section","linkId":"24e2b759-202a-4504-8a12-f6e32e83b91d"},{"uid":"0c81cca6-a3e5-4d50-8286-2d4b1e66ebfd","sectionTitle":"Main Content","linkId":"f1f15f8b-1b59-4a2c-9a16-bb8e704fbd02"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6ccd935e-e2e6-42a5-a8c1-142e80631de5","linkId":"6ccd935e-e2e6-42a5-a8c1-142e80631de5","name":"Tela de suporte","folder":null,"paths":{"pt":"tela-de-suporte","default":"tela-de-suporte"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"c92a638f-cf6e-460c-99ef-ae73310b15c3","sectionTitle":"Top Nav","linkId":"47d719a5-57df-448f-804e-f784581203b7"},{"uid":"17e4e9c3-d914-47e4-aa69-be59ab293c07","sectionTitle":"Modal_Login","linkId":"c17b26eb-493c-4d06-8741-80d5e8146032"},{"uid":"729350dd-988e-4fb2-a31a-267b71523d7c","sectionTitle":"Modal_Signup","linkId":"377018ee-9a51-4a49-b66b-075e2d553426"},{"uid":"40a6f861-c8e9-4760-8f52-55506bc927e3","sectionTitle":"Menu User Logado","linkId":"f7b2a64f-25b1-42d9-8ccb-b594aab29811"},{"uid":"3f761e13-fade-456d-872b-079233c64270","sectionTitle":"Header Section","linkId":"76303bc5-4afb-47c9-b57b-88d5f6cef740"},{"uid":"450d64f4-3c72-4923-b57c-04d89439599c","sectionTitle":"Categories Section","linkId":"e69a3600-c6a2-427e-8284-1eac4adea5ce"},{"uid":"68b418a7-c02c-4942-9697-d361a4abd1c5","sectionTitle":"FAQ Section","linkId":"ffa0cace-7a72-4446-a330-b447b1565cd6"},{"uid":"c631eb37-1280-492b-aa86-257e874f9e39","sectionTitle":"Contact Section","linkId":"e6d46dc0-a3ff-40af-8403-cdd8f4c44732"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"64880edc-ff28-49cf-81ae-a090040bc42d","linkId":"64880edc-ff28-49cf-81ae-a090040bc42d","name":"Tela Inicial Lojistas","folder":null,"paths":{"pt":"tela-inicial-lojistas/{{loja_id|}}","default":"tela-inicial-lojistas/{{loja_id|}}"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"082f8334-42d5-43df-9013-cd332f69c971","sectionTitle":"Sidemenu","linkId":"6f2c19f7-5c37-4a4a-9281-309cd11c8909"},{"uid":"19db2814-ca62-4f76-bc10-4a292bf1cf40","sectionTitle":"Container","linkId":"00545ea1-4e2a-4006-876e-d094b965f103"}],"pageUserGroups":[{},{"userGroup":{"id":"b3fb1223-ea75-44bb-919a-ce82a75afe2a","roles":[{"value":"099787c5-2d7c-48a2-b477-867b2c40afa7"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f4f3695b-e5bb-46dc-9066-3d50b7bed5f7","linkId":"f4f3695b-e5bb-46dc-9066-3d50b7bed5f7","name":"Cadastro Loja","folder":null,"paths":{"pt":"cadastro-loja","default":"cadastro-loja"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"b55b8600-deb4-439a-82af-3f6c8a30cd30","sectionTitle":"Store Registration Form Section","linkId":"034ed54e-b283-4ab6-9b50-3d777384982f"},{"uid":"800d3305-edc6-4385-8274-e489b6d94850","sectionTitle":"Alert","linkId":"d50b9a7d-7da6-4d2b-aaff-b63ccf02bb44"}],"pageUserGroups":[{},{"userGroup":{"id":"b3fb1223-ea75-44bb-919a-ce82a75afe2a","roles":[{"value":"099787c5-2d7c-48a2-b477-867b2c40afa7"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f5504069-f5ab-4094-8588-f5211dc4b3da","linkId":"f5504069-f5ab-4094-8588-f5211dc4b3da","name":"Landing Page Clientes","folder":null,"paths":{"pt":"landing-page-clientes","default":"landing-page-clientes"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"549557e0-3634-4603-8916-7972bdfac9e9","sectionTitle":"Top Nav","linkId":"a310fe6d-b3fc-4f9b-976d-c702bf93faeb"},{"uid":"0f825f30-8f71-42e5-a048-b3a4377f7e23","sectionTitle":"Modal_Signup","linkId":"82da263f-ecc7-4671-a1d1-8ce7f3e1782e"},{"uid":"0a2be31b-a3ba-4745-9c87-7e53ba1c2c3b","sectionTitle":"Modal_Login","linkId":"c4014960-910b-45fe-bbe6-be7d7d99d152"},{"uid":"ca3607e9-bfac-4a66-a48c-798a8103a449","sectionTitle":"Banners Section","linkId":"5db06bab-4bcf-4b5d-9c99-bea8ab5dff53"},{"uid":"2cf8ff1b-5bb3-4505-bb15-57218e286aee","sectionTitle":"Hero Section","linkId":"6662f5ea-1e47-44af-9b70-328a020d2710"},{"uid":"145c766f-0a72-4407-bee1-1bf631dd045d","sectionTitle":"Benefits Section","linkId":"aca23801-497d-4549-aaee-6e31d2748000"},{"uid":"b2937dcd-4fc2-4527-9bb4-23269de7630a","sectionTitle":"CTA Section","linkId":"f53c446a-99d9-4fa4-8e44-7180876f4ac7"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0ebf182f-5833-4a3e-a9bf-82fd53735c93","linkId":"0ebf182f-5833-4a3e-a9bf-82fd53735c93","name":"Landing Page Lojistas","folder":null,"paths":{"pt":"landing-page-lojistas","default":"landing-page-lojistas"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"2f933c8a-e9ef-4129-9f09-8f9b4a1868dc","sectionTitle":"Top Nav","linkId":"081bca40-98c2-4784-9917-1450c6505cb1"},{"uid":"5f0b0a12-0f6e-40ad-b541-182154ca386d","sectionTitle":"Hero Section","linkId":"34fc5bbf-5a5b-4f15-b6dc-3b1c73214097"},{"uid":"ab894593-e4d3-4e3f-8256-d1b1b0213fb8","sectionTitle":"Features Section","linkId":"cd540b04-1abf-479c-a66b-274b24c86407"},{"uid":"5001b55b-3568-4cea-8a18-cde3b9fb5221","sectionTitle":"Benefits Section","linkId":"fe43a783-15cc-4a3d-b526-754aa993d9d2"},{"uid":"d9cee4a7-ffae-4722-bea6-f94f57391fce","sectionTitle":"CTA Section","linkId":"a9d1469e-5a17-4454-81a2-4148c95f91bb"},{"uid":"285ab0b2-be92-46ab-a5d9-2a33f4140d3d","sectionTitle":"Modal_Signup","linkId":"41882e99-ff6f-487f-87f3-5ddf69f7870f"},{"uid":"4fca25b7-08e5-432b-8215-d56771837397","sectionTitle":"Modal_Login","linkId":"91831aff-3759-4812-ac07-457dcbc0a2b3"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1be7204e-7a97-4c40-b77c-e145baeac24b","linkId":"1be7204e-7a97-4c40-b77c-e145baeac24b","name":"Produtos da Loja Dinâmica","folder":null,"paths":{"pt":"produtos-da-loja-dinamica/{{loja_id|}}","default":"produtos-da-loja-dinamica/{{loja_id|}}"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"cc4abfe6-ac8a-4311-b304-c09c98253096","sectionTitle":"Top Nav","linkId":"7f1257f0-5c76-4189-a05f-8b78dd32f8a5"},{"uid":"8080e9c1-c68f-414b-8972-883c9577ce78","sectionTitle":"Modal_Login","linkId":"31878487-4616-4db7-967b-0ed1d5aed4b2"},{"uid":"fa7961a8-f437-43eb-9913-1dd290b805cc","sectionTitle":"Modal_Signup","linkId":"6fe33d1f-6165-4dc1-bc06-f94254476663"},{"uid":"faba27a1-baec-4e0c-8c3b-f1cde8d54eae","sectionTitle":"Menu User Logado","linkId":"423d21d0-9365-49e8-85b9-b131f18c912b"},{"uid":"cbf72a8b-21be-417e-baaa-5954845e7209","sectionTitle":"Header Section","linkId":"ad13809c-be2e-4717-8dd9-f18e7d96089d"},{"uid":"9e002ab8-7be1-471c-a572-bb6b647c1d4f","sectionTitle":"Main Content","linkId":"5f47ba72-57bf-405b-ae62-f483e372c66b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"99d66ade-5a32-4a3e-aaab-3239490a99c1","linkId":"99d66ade-5a32-4a3e-aaab-3239490a99c1","name":"detalhes da categoria","folder":null,"paths":{"pt":"detalhes-da-categoria/{{categoria_id|}}","default":"detalhes-da-categoria/{{categoria_id|}}"},"langs":["pt","en"],"cmsDataSetPath":null,"sections":[{"uid":"79f19750-450b-472e-b8d0-795f5d75ed0b","sectionTitle":"TOP NAV","linkId":"ebe18db9-4c03-4dff-9865-0f37396635eb"},{"uid":"2693dbc7-b897-4be6-85cb-a5e2cde2af99","sectionTitle":"Menu User Logado","linkId":"be7a24d3-62b7-4eef-965c-15fd6356fddb"},{"uid":"588143e2-d796-4b0a-801d-96d828e02ac5","sectionTitle":"Modal_Login","linkId":"af14b03c-1c88-4906-b7cd-c28e0381fc1b"},{"uid":"f231047d-583f-47a2-ae87-5c61da80024f","sectionTitle":"Modal_Signup","linkId":"c225c962-d65f-468c-94fd-51888eaa2b06"},{"uid":"eaa4c303-e0ed-4aad-8854-3931fdee3741","sectionTitle":"Product Section","linkId":"a16c5192-f73e-4981-9781-5ecc8b7af6aa"}],"pageUserGroups":[],"title":{"en":"E-Commerce"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"11b21717-7774-49ff-adb3-5653d60f7961","linkId":"11b21717-7774-49ff-adb3-5653d60f7961","name":"Lista de desejos","folder":null,"paths":{"pt":"lista-de-desejos","default":"lista-de-desejos"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"430117e1-67b7-41a4-8dfd-4d0a5e570148","sectionTitle":"Header Section","linkId":"0eef9637-9882-454c-a305-0c6a66d3d459"},{"uid":"34e3daca-69e1-41db-8775-2f42f3aa6a5a","sectionTitle":"Main Content","linkId":"ad4ac2d9-1b3e-48ac-a63d-8ad617c58cb9"},{"uid":"731e50f5-4d8c-41f0-a341-c2a1f0befd68","sectionTitle":"Empty State","linkId":"da3c054b-2f4a-4455-9607-2fa4462be938"}],"pageUserGroups":[{},{"userGroup":{"id":"9b5a54f4-4ccc-4fee-bd74-3ce1d5790b4a","roles":[{"value":"2f657a19-7fc3-4764-a7cd-80519ecd3083"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bdffe14f-f43d-4e25-a6d2-67206b85bda7","linkId":"bdffe14f-f43d-4e25-a6d2-67206b85bda7","name":"Detalhes do produto","folder":null,"paths":{"pt":"detalhes-do-produto/{{produto_id|}}","default":"detalhes-do-produto/{{produto_id|}}"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"74a272c3-9fac-405d-b374-ee089cc8e60f","sectionTitle":"Top Nav","linkId":"5a9440d0-31c7-4dad-9813-a8aa350acb9c"},{"uid":"17a22fcc-e428-41f3-92ad-2f4df231ed4f","sectionTitle":"Modal_Login","linkId":"2c1128b2-30a1-457a-8473-297b0e17108f"},{"uid":"4aa66c82-c291-48de-bd36-d866b9c27646","sectionTitle":"Modal_Signup","linkId":"6472779f-5a52-43e2-9d58-c428dfcb5c0c"},{"uid":"0bc53ce8-bc71-4baa-a0fb-52538ce05017","sectionTitle":"Header Section","linkId":"9eacf2b6-6159-4422-8fd3-37d8a5222a36"},{"uid":"cbc8adbb-f0e4-4fc5-b079-f97228098a42","sectionTitle":"Main Content","linkId":"4e672e79-7656-4895-8e69-a662423dcb8f"},{"uid":"50ddbfc7-5d5f-4e08-8369-eac82e240681","sectionTitle":"Clipboard Alert","linkId":"b8932ba2-1c4e-4a59-a78e-7035b294760f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c7518a15-0fcb-4978-8aa2-4f370b9d6875","linkId":"c7518a15-0fcb-4978-8aa2-4f370b9d6875","name":"Lista de desejos Teste","folder":null,"paths":{"pt":"lista-de-desejos-teste","default":"lista-de-desejos-teste"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"c8bc6f1d-233d-436d-ba49-b0ffee1214e5","sectionTitle":"Header Section","linkId":"d5d1101f-66c5-4152-afb9-d70398bf44f5"},{"uid":"d68c5524-2922-4de9-b735-ec46014194d7","sectionTitle":"Main Content","linkId":"5eac0665-5eee-4383-b387-685f9da9fa56"},{"uid":"5ae4c9df-98f7-432d-97ad-a4c06ceea669","sectionTitle":"Bottom Navigation","linkId":"0071a8e9-970a-4180-ae25-744b5823b660"}],"pageUserGroups":[{},{"userGroup":{"id":"9b5a54f4-4ccc-4fee-bd74-3ce1d5790b4a","roles":[{"value":"2f657a19-7fc3-4764-a7cd-80519ecd3083"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"88b403c6-f2c4-41d6-9a5b-b2aef19afedd","linkId":"88b403c6-f2c4-41d6-9a5b-b2aef19afedd","name":"Tela Lojas Dinâmica","folder":null,"paths":{"pt":"tela-lojas-dinamica/{{loja_id|}}","default":"tela-lojas-dinamica/{{loja_id|}}"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"b20323ea-d991-4acb-b408-f91be3180812","sectionTitle":"Top Nav","linkId":"99b57f5c-b128-42a9-a4df-8c90a1f62295"},{"uid":"69be41f6-10d6-4cc3-8b5e-f15e57176486","sectionTitle":"Modal_Login","linkId":"6ceedd85-a9df-4fac-b1d9-17ee06a44290"},{"uid":"99a81942-6005-41b6-ac68-c36167bf8a85","sectionTitle":"Modal_Signup","linkId":"d404e879-5644-4f6d-9794-419a268b9b95"},{"uid":"9d1f5f53-3fbf-463a-b752-7cb4abc56dab","sectionTitle":"Menu User Logado","linkId":"f9a61071-c8ce-499b-ba2b-18adbaa09bfc"},{"uid":"12e34e90-54d8-4f96-a6a2-e002eb5a1726","sectionTitle":"Header Section","linkId":"0edf0e6f-d5d1-496d-83b7-29304a30c83f"},{"uid":"e5220c01-2743-4359-bc27-47b358537ff2","sectionTitle":"Navigation Section","linkId":"2b64af8c-c46e-455b-9fc9-d629d3d35016"},{"uid":"e7fcbe83-6bb3-4d22-8afd-c3f14ec9e6b3","sectionTitle":"Content Section","linkId":"3f56f0be-2e27-4cca-94bf-2dd03927a726"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"107deeaf-c4d2-4261-a58f-c8886f2334f1","linkId":"107deeaf-c4d2-4261-a58f-c8886f2334f1","name":"Tela Geral Categorias","folder":null,"paths":{"pt":"tela-geral-categorias","default":"tela-geral-categorias"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"cd363490-f924-4fe4-a5c5-9248d50c593e","sectionTitle":"Top Nav","linkId":"01f19b75-4dab-46ba-b6fd-209aceb585e9"},{"uid":"fc70b035-a74d-4be9-96fb-bb982f294b57","sectionTitle":"Modal_Login","linkId":"9e316c65-3878-4d8c-b2ee-fcb182f7e2d5"},{"uid":"74576eac-c22b-4370-9aa6-bf2afd7ce4f9","sectionTitle":"Modal_Signup","linkId":"f609a8a0-ae16-490a-9f69-5006beb916c4"},{"uid":"672f1812-0011-4dad-a885-861822a84b58","sectionTitle":"Menu User Logado","linkId":"00360dff-07c5-4c6e-a4d5-c442f3ebee6a"},{"uid":"0aeb0527-cd77-4d46-b149-5d37abc81ce1","sectionTitle":"Header Section","linkId":"d41b8a84-5e50-481d-83a7-96354cdc5c16"},{"uid":"798e5d7e-6854-4bbf-923e-522620e2e01b","sectionTitle":"Categories Grid Section","linkId":"07a823f9-c367-46ac-82d1-57d98edaeb95"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"94058455-b36a-4f83-bbe5-3d5bdda1e030","linkId":"94058455-b36a-4f83-bbe5-3d5bdda1e030","name":"Tela Promoções Relâmpago","folder":null,"paths":{"pt":"tela-promocoes-relampago","default":"tela-promocoes-relampago"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"e5f1786f-1b79-4c63-bf0b-04e74acc45de","sectionTitle":"Menu User Logado","linkId":"74e8bde7-2d16-4fa7-aa6e-1012e204df4d"},{"uid":"913c377e-fce1-461c-b9dc-a8dee7b34a95","sectionTitle":"Header Section","linkId":"23bec6f9-4f17-4383-aef2-ca525fa49e2a"},{"uid":"e63cddee-33f4-4553-bc63-3e69edc15cd9","sectionTitle":"Main Content","linkId":"a0eb0f09-ab60-4c0c-86eb-3071ce830f67"},{"uid":"7679e695-f3d9-4d55-8f96-03f045d29ee3","sectionTitle":"Bottom Navigation","linkId":"de3a9a4c-cc6f-4930-9237-a1c86a61d540"}],"pageUserGroups":[{},{"userGroup":{"id":"9b5a54f4-4ccc-4fee-bd74-3ce1d5790b4a","roles":[{"value":"2f657a19-7fc3-4764-a7cd-80519ecd3083"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"376e32b7-360d-4607-b595-16d8d9c17d98","linkId":"376e32b7-360d-4607-b595-16d8d9c17d98","name":"Lojas Favoritas","folder":null,"paths":{"pt":"lojas-favoritas","default":"lojas-favoritas"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[{"uid":"65d12161-fc02-49aa-969f-b54d99cb7420","sectionTitle":"","linkId":"a308596a-67bd-4706-83a0-3732f6197c20"},{"uid":"76b7a95a-f1a6-4861-ba94-7be40d1227d5","sectionTitle":"","linkId":"079310e1-ab5e-4ee3-a7c7-4a3d92d5f6d4"},{"uid":"44a57a03-e11f-42b6-bc6c-c777cf861def","sectionTitle":"","linkId":"0f1883d7-604e-4c86-8ec4-243dc7426387"}],"pageUserGroups":[{},{"userGroup":{"id":"9b5a54f4-4ccc-4fee-bd74-3ce1d5790b4a","roles":[{"value":"2f657a19-7fc3-4764-a7cd-80519ecd3083"}]}}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"deae0555-9db9-4a97-a6b3-50c983db0e63","linkId":"deae0555-9db9-4a97-a6b3-50c983db0e63","name":"Tela Faça seu cadastro","folder":null,"paths":{"pt":"tela-faca-seu-cadastro","default":"tela-faca-seu-cadastro"},"langs":["en","pt"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"56702062-c65d-47e7-9ac1-7bacec81ac91","linkId":"56702062-c65d-47e7-9ac1-7bacec81ac91","name":"Página Lojas da Categoria","folder":null,"paths":{"pt":"pagina-lojas-da-categoria/{{categoria_id|}}","default":"pagina-lojas-da-categoria/{{categoria_id|}}"},"langs":["pt","en"],"cmsDataSetPath":null,"sections":[{"uid":"79f19750-450b-472e-b8d0-795f5d75ed0b","sectionTitle":"TOP NAV","linkId":"ebe18db9-4c03-4dff-9865-0f37396635eb"},{"uid":"2693dbc7-b897-4be6-85cb-a5e2cde2af99","sectionTitle":"Menu User Logado","linkId":"be7a24d3-62b7-4eef-965c-15fd6356fddb"},{"uid":"588143e2-d796-4b0a-801d-96d828e02ac5","sectionTitle":"Modal_Login","linkId":"af14b03c-1c88-4906-b7cd-c28e0381fc1b"},{"uid":"f231047d-583f-47a2-ae87-5c61da80024f","sectionTitle":"Modal_Signup","linkId":"c225c962-d65f-468c-94fd-51888eaa2b06"},{"uid":"1e461eeb-780c-4fa5-aa5a-47be99d44f57","sectionTitle":"Product Section","linkId":"93a1ac0b-014a-45ba-b2bd-98663eecf6d3"}],"pageUserGroups":[],"title":{"en":"E-Commerce"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"cabb43dd-6161-4140-8ebf-03b6fb045a0b","name":"Google","namespace":"google"},{"id":"f5856798-485d-47be-b433-d43d771c64e1","name":"Xano Auth","namespace":"xanoAuth"},{"id":"6a64802c-52f8-4637-9932-580bf178aaa7","name":"WeWeb Auth","namespace":"wewebAuth"},{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 61;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes( //TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
