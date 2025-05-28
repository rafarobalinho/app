import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_6cbfb394_eb87_4d17_8df6_37ebc95e66d0 from '@/components/plugins/plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0/src/wwPlugin.js';
import plugin_cabb43dd_6161_4140_8ebf_03b6fb045a0b from '@/components/plugins/plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b/src/wwPlugin.js';
import plugin_f5856798_485d_47be_b433_d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/src/wwPlugin.js';
import plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/src/wwPlugin.js';
import plugin_6a64802c_52f8_4637_9932_580bf178aaa7 from '@/components/plugins/plugin-6a64802c-52f8-4637-9932-580bf178aaa7/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0', plugin_6cbfb394_eb87_4d17_8df6_37ebc95e66d0);
wwLib.wwPluginHelper.registerPlugin('plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b', plugin_cabb43dd_6161_4140_8ebf_03b6fb045a0b);
wwLib.wwPluginHelper.registerPlugin('plugin-f5856798-485d-47be-b433-d43d771c64e1', plugin_f5856798_485d_47be_b433_d43d771c64e1);
wwLib.wwPluginHelper.registerPlugin('plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7', plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7);
wwLib.wwPluginHelper.registerPlugin('plugin-6a64802c-52f8-4637-9932-580bf178aaa7', plugin_6a64802c_52f8_4637_9932_580bf178aaa7);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"691a19e9-e7be-40fa-9d40-2b3232cae0e5":"#265298","d734ab1e-b33f-43e6-9879-908daffd2fff":"#DEE5F0","7a2c6440-45eb-479e-9f86-4de577618806":"#94A3B8","f6a3882c-c920-46b5-a2e1-cc62571f6dc0":"#DFE3EA","b9c43272-24c8-4c9c-8972-fcb7971df70a":"#219653","5fdbb3e5-87ba-41ab-8f22-b490a513ce57":"#7C5F0F","408f05fd-a799-407c-be48-766397fe6b2b":"#CE3F3F","6ec84b54-630d-4e54-b129-81a2e06acca3":"#2D9CDB","32ceabc3-14bb-4b32-94be-1534014b007b":"#6F530B","3894a226-0b1a-47f3-87d5-0919525b1698":"#C0C9D8","456f56b7-ceeb-4213-bfab-51aef90afa2e":"#1D3C6D","1156a7f3-b64b-40b6-8cac-a6a97ec8a47e":"#F1F6FF","b23992f6-7e3c-46ad-8796-a50665ad98f0":"#edf1fe","a9f33976-bf0e-4c20-b61c-8b10195ca42f":"#e8f3ff","926aeab5-1669-4413-9acf-c0a23e987366":"#c7d3fa","99f1af8b-d48d-4709-b08b-2c4880a8eaf7":"#abbdf8","b662d6b6-a945-40e6-843d-858a4e188981":"#859ff5","9faae9d8-5047-4d80-a18b-652f1726da95":"#6d8df3","436e8ff2-7bbc-4dc9-b27a-0e5b896f2a73":"#4970f0","c0873c83-c1e3-4818-b06f-05c53db3fdc0":"#3450aa","2635941a-12dd-4b8c-9108-78c3ffd5ce4c":"#283e84","a7e2c0ba-20b5-4434-b03c-2a6bd3f5b81c":"#1f2f65","4edf5e35-54c0-4ae5-a2eb-c909093cef04":"#eaebef","ab46b8dd-9b46-4cf4-bd59-295e712d4fe4":"#edf0f5","75847eb2-8865-43cf-8fc7-42b88002f985":"#bdc2cc","75f2ba8f-76df-4271-856a-1149dedaf4fb":"#9da4b3","f1972e66-cd4d-46db-bab7-f5a20367bd19":"#707b90","a44e23ee-560f-4424-9d85-48a301e53abd":"#55617b","d571056e-4297-49ae-a7ad-c707282a13c1":"#2a3a5a","2e747079-8f5d-4984-b9f4-f0271de8302f":"#263552","c059da5c-fcc4-4d50-b5c4-69acc68ee2ac":"#1e2940","8fa7c605-ff8f-4933-8572-e14d3ec19c71":"#172032","8ce3f01f-9c0e-430c-b820-229bd94b84e5":"#121826","c63534ba-9065-4124-865a-398c1c65296b":"#e7f6ec","75cfc3a5-6484-4c39-ab48-f5c85d54aba8":"#b5e3c4","2753e3b5-50ce-4a48-8e18-f2a214159073":"#91d6a8","41f5d28a-7c03-4efe-92ac-53333131c89a":"#5fc381","30c9949a-69c9-41bf-8ae0-d32ec66f4495":"#40b869","4d7e2bbe-8eaa-437e-84b6-b0636f5103b7":"#037f2d","221f0154-25f6-438a-9f4e-a78347e67b84":"#015b20","1a12b38c-ccef-4af0-a7e7-ba97d9f9b54f":"#fef6e7","910d021e-bab9-4377-a206-3e46f2a8fd7f":"#fbe2b7","583d5180-f9bb-4273-b7c9-bc64a19ac576":"#f7d394","2ae0b992-bf23-4796-bde6-b267b1636ce2":"#f5b546","df56e81a-9369-4b04-b7be-52740106430b":"#dd8f0d","17c7399f-9143-41df-b3bc-dbe48d247394":"#664001","c3f23d77-8a87-43d4-850e-e409cfc867c1":"#fbeae9","08b782d6-b751-4364-ab24-d19ee1412c3f":"#d3251f","682cb0ab-6f9a-4f39-a198-656c8d539966":"#ba110b","9ef2c79c-0bae-4699-817f-147e8bd78a4f":"#7f0501","6c90393f-6e8f-41dc-b6cd-fe27f9cd7eed":"#591000","0363ae2e-f669-4afb-8108-81ab992a64ec":"#f9f9fb","69588835-8957-4796-91a6-3df20ee9c7f4":"#eff1f4","77101647-9e3b-43aa-aeca-ae772a4ef1ff":"#d0d4dd","942ce2cf-7d90-4b9f-b964-84e065c6aedb":"#667185","114cb4cc-c285-40cd-9680-108dd7f08096":"#344054","afa6e7e5-aaf5-47e1-9cb9-de45dbe42563":"#1d2639","a8d04832-80fd-4363-ab1e-95b4ba64f579":"#ffffff","b6e29504-7406-45fe-ac44-3b85493678ad":"#000000","0d6ae005-5367-48e8-a474-83326bdbebf0":"#0f973d","5db70ef2-0c52-42c4-92d8-b19f0ad185b8":"#099137","4c59bd4a-4aa2-407a-b111-01655f6e0e9c":"#036b26","3af94785-a84f-4588-b9ea-62c1b63212eb":"#004617","25c05e26-7cfa-4fd4-98f9-cc29134ccb2d":"#f7c164","6583f794-4644-4a05-bc38-466d75e7181b":"#f3a118","071392d8-3c23-43c9-9547-5a3d5b836928":"#ad6f06","078fb121-677e-4c59-be53-6d965918d36d":"#865502","dfedd935-8084-4df7-8bc4-0bc68f50134b":"#523300","d8b4b10a-6023-45b4-b699-525903f3eda5":"#f2bbba","96721ad6-ea11-4dff-91ff-9968b98b56ea":"#eb9a98","9a0185c8-4d87-4032-aadf-0c3180b4e25f":"#e26e6a","9f65efbb-8ec4-400c-bcd1-20f884c5c916":"#dd514d","48289c77-c6e5-4d10-abf3-bd0171e6a5bc":"#ca1a14","80595560-fd1a-43b7-800e-17b7afc06725":"#9e0904","935ecc2d-bc44-48e6-a8cf-1747074a79f8":"#f7f9fc","776efcc7-ed80-45be-96ff-24aed6fad637":"#e4e7ec","a5f348fc-f603-4414-a383-e0bc8b8f32db":"#98a1b2","398b55cd-a145-40b5-81aa-64e938b5a045":"#475267","79ab5b40-5c85-4c26-a2ed-6a7f2d1ef4cd":"#101828","3bb8e08c-1861-4333-93c3-f46127d34568":"#f5cc54","dd2edf6a-e95e-40c3-b90e-1970cd9b0a24":"#000000","03f97d03-e8b5-4260-b9a6-84b4e9ac4edb":"#000000D9","db07d869-7076-4fff-8cb5-8f81b9060866":"#00000040","afb0622b-008d-4d99-893c-0f0ebe9cb2ae":"#00000073","7135d9d0-003f-4d5b-979b-4835ed0b65bd":"#0000000F","269e56d1-6215-4b79-9d82-7e6cee40fa2a":"#000000D9","8fbac7c3-9c29-4120-a916-efddf0ee92e0":"#00000040","b841af6a-0836-4052-adfd-99ee3aa9ee4a":"#FFFFFF","a30feb65-a942-4bac-9f38-16dfb4436c11":"#e1e3e5","02e08795-d352-49fd-bc93-5286044ef953":"#c2c7ce","c8122ad7-6c9a-437c-84eb-04e924772175":"#a3acb9","e04035ac-59ff-4f90-9036-1e77cda9cb24":"#8692a1","fdb7537c-e7ec-40ba-a311-0e01c275a6ee":"#6c7888","a74a44a9-425f-4705-b866-f1421c68df52":"#545f6c","781a330b-49ce-4467-80f7-40a4a21b1299":"#3f4750","34573081-741e-4f9b-bb0a-b54fa699d29d":"#2a2f34","04645073-e69e-4e73-80ef-5f1f56118c99":"#151618","44df1337-b30d-48d2-9cdf-9c0ce338502e":"#e2e2e2","b56a2bd5-4834-484d-8ecb-7760c0ebc14b":"#c7c7c7","e964af1c-8020-4e44-96df-93b418abf1ff":"#ababab","aed66389-4433-45b2-be66-5622e3df32e7":"#919191","5172739f-2906-4f10-a758-a1d4929606dc":"#777777","eb5500ae-9ab2-4f6a-83e9-afdc2e3bc1b2":"#5e5e5e","1804f5dd-ffbe-4d0f-a18e-7d9af9eb1c8f":"#464646","f0e9c89a-44ab-4e0e-b1d4-1c223f5c1088":"#2e2e2e","4cb797eb-6ee0-474f-b1dc-99461ce603bc":"#161616","9e8130f5-d6e8-45fe-a977-2cc5e23c6bbb":"#f8f8f7","0f661c98-70c5-4b0f-9ce1-6f860eb63b49":"#e5e2de","bb3eaa2d-d4b7-4b14-8e3d-245d1ff7d00b":"#cdc5bc","0b2b321a-ec10-4f3b-bbbb-469272549bdb":"#b5aa9c","6b06c6ba-a34b-4c75-ad9b-bfb7e3d302d4":"#9b8f7f","f61a0146-c1a8-43c8-84e7-9167aa1bb25f":"#817566","a182872b-7383-46fd-a619-8f51d0d52e37":"#675c50","7950677e-aad2-4e7e-a55b-a0e4b568b0c6":"#4c443b","a1277df6-36d4-45aa-b73c-b3e8c1ead1b5":"#322d27","bfdde87c-ea57-4199-bdd9-93db2a273c9a":"#181613","04b93f0a-1fe2-4b5d-8f1a-a487c7c67ef3":"#d1e4ff","d4334cce-a468-42bf-9a6d-51aed19f8289":"#a2caff","b5bcca88-2522-4e68-880e-aee6d63a2e47":"#6faeff","b8065e7d-980b-4ae1-9b66-71c23c085a2a":"#3090ff","c9179837-9d7e-4518-9fa7-8e065db8409d":"#0075df","9821eac7-4263-4bb8-964c-47ddd1b963cf":"#005db1","8bea7fb1-7617-43d7-8391-a42a8ba2ed9f":"#004585","18dcd57b-d6f9-4fa8-9967-a2082f8b8c8e":"#002e5b","dbefda4d-f2df-4a94-aa56-d154013e03e3":"#001631","e9446b2b-09b0-4e6b-90aa-7d5760edcf4b":"#f5ddcf","0fb23398-7e19-4878-943c-6cc4cb22e0c7":"#f6b791","032d8d1a-8928-494b-86d7-0b10c8b6bb69":"#f68c47","95f27f34-c853-49ff-ace4-f3d827bef530":"#de6c0b","d1b5feb5-be21-4239-a938-9b35641d53c2":"#b95700","5cf45ebd-4fc2-4d74-b7cf-022e9de4249f":"#944403","ea6e1fcd-450b-4bf8-a835-8c85eb7e7f73":"#6f3207","31c43a43-4017-45f3-a88b-fc93427b6464":"#49220a","61a949be-2329-417a-8c47-8d5060a73eed":"#231107","e3bb1f43-e60f-47a9-8d3d-f436511c95eb":"#faf8ed","b19a2186-b06d-4a00-abc7-59a8b7252439":"#f1e3a9","eaebb6eb-2114-42ef-9d3f-66c1037222f0":"#c8aa19","c17c036a-24b7-435f-b6d0-2be3936c5447":"#8d7500","14f92e1b-c639-4e6a-b09d-6a189218f090":"#544406","4f0c4735-5c98-4ddc-9714-73d4410e47f9":"#382d07","defdd300-5ef6-4a2e-9852-0328005bf8b7":"#f4faf3","23aa7fa3-11f0-4d27-aa14-fb0a7d2473ed":"#c6f0c5","b4a51e39-8e67-48ae-82b5-041ab116b358":"#53c954","4c0c4797-47f3-416e-8f49-9e7749abc810":"#2aad2c","efd91745-2fb2-4e7e-a5b0-9f0a372dcdcd":"#1e7118","e5693771-d83f-46ab-85b6-7e9b0f1ea8c3":"#1a3616","a0df6c5b-9408-4825-809c-bd96f7a6ccb8":"#faf7f7","fb469904-507a-456a-930a-982b7010ca01":"#f6efee","6bd67ea2-8fa9-43a5-8cf5-50f625558e3c":"#f3b5b0","c8ad9641-1f8b-4f9e-972e-24d3d7c79164":"#fa444d","fb8a0c40-ded1-491a-bac7-14016b364ef0":"#af1129","2c7bfcbf-d833-46b0-9e49-bff3a2696a1f":"#4f1a1c","abd52525-b934-474f-8b93-e976fece5f80":"#e3c645","1ddbd5a9-0bf6-4f67-99f4-c4846032af7f":"#ab8f05","24ab4fe2-969e-4cbc-9985-89c353066a89":"#705c03","13fc8b4f-a356-4975-ba62-96bb6aa8fd25":"#1c1604","fa4d9179-2c75-4b4e-ac46-90ca735cc6d2":"#e6f6e6","cacd1009-7dcd-4c7b-a9d4-8978050bcaf9":"#7ee27f","9475d0e1-b273-475a-b540-5fe7d8df2ea6":"#009100","ae584ace-7bbd-4b34-8713-e000815bf128":"#23521d","157c9b53-591d-410e-9018-916de18e1c0f":"#0d1a0a","dcf7d119-b64f-4e4f-ba82-20185e1e3375":"#f2dddb","74b3c7e8-14ef-4488-9962-388f8c533d23":"#f78580","1c7b698e-806f-42aa-87ae-3ca740940b00":"#de0030","dba3598f-a6ac-4791-a54d-c335ef510ac8":"#7e1a23","199b6fa5-1912-4926-801c-ad88ee962d63":"#241010","b44bfa26-84ac-4ce2-805c-6ab1ba8e9fec":"#f7f1d9","5e7f9d06-2093-42b5-b06f-3c49c3cc5696":"#f2f0ef","6c1d3a95-c836-4dc6-9135-2e0ce966be72":"#f8f8f8","b8db72c0-cb8d-4f74-8de8-ae23882ccea2":"#f0f1f1","a9bc8da4-0ee2-46ab-97aa-5980cd432c9e":"#fbf7f4","8c2636a5-8f0c-4dd3-b5dc-1db6770c94fd":"#f8efe9","530fd98b-c9ff-4178-8122-dfa61ebd54b2":"#f8f8f8","be1705aa-2fa3-45e3-9a2d-b1e3154688a1":"#f1f1f1","08b2c1eb-4626-4895-ad53-022caf0279fe":"#f4f8ff","57730e5b-3d41-4c65-b5c5-591a2b4f2c6c":"#e8f2ff","d3a49805-61f0-4926-8c06-2e1f90e2150d":"#FFFFFF","4fd32e58-0ffb-4053-af73-60b8aa50f3d0":"#000000","e99015b2-d7be-4178-bf00-1f92dc4144f1":"#f6f6f6","109b4a3f-df38-480a-96de-6449b87720cd":"#e7e7e7","9fd322cb-5399-4536-bf8e-939a194d05db":"#b0b0b0","fdf68224-d7d8-4f83-9fb5-314d826f9a5f":"#888888","f104bb44-6aab-4947-8e96-cb89cc15b033":"#6d6d6d","cef0aae5-9d67-4fcf-9d79-755caaaf6938":"#5d5d5d","32701286-8243-4e7c-ae37-942ffd9813f5":"#3d3d3d","892b3030-2c4b-4a72-b57c-c33abd971952":"#222222","f044ba99-3ee7-4ae3-ab37-c3484f7b4050":"#060f11","cd42601f-3954-4e4e-9e95-51692b8dcebc":"#1F79FE","3c270a3b-19ff-48ed-8623-eac8c6bd1ab9":"#0E3C7F","4932bda3-f7ea-4905-8b9c-740fe9463b6d":"#FFFFFF","a6d57a2f-b240-402d-958b-7e612708a37b":"#000000","ae5eb0d2-5971-4a47-8307-6f6cb4f8e314":"#f6f6f6","4bf361aa-54a8-4ddd-9f01-eded51616ed2":"#e7e7e7","09d8e6fe-a142-4d70-9e9f-017a2296e898":"#b0b0b0","330b3d13-764c-44b8-9974-8bbc519411be":"#888888","14397b47-e12a-4ab7-becb-e77fd8d89972":"#6d6d6d","84a8b515-e613-42d9-b0c8-da2d4a84eb60":"#5d5d5d","df12a772-23fc-4fa4-8ac0-e6d60c78100f":"#3d3d3d","7f437e1f-86d4-4ad9-8417-d3c0808ab4b5":"#222222","682e4e18-b455-4c05-9690-3e4edc875257":"#060f11","d70b7472-b966-4742-9285-63118edd81c3":"#1F79FE","d96f26ea-82e5-432b-8de2-8f8266e9289d":"#0E3C7F","2d2f679a-3955-4d6d-9744-82d452a34c6d":"rgb(51, 65, 85)","fdd51ce6-3a91-46b9-8f19-398bc399db44":"rgb(100, 116, 139)"} : {"691a19e9-e7be-40fa-9d40-2b3232cae0e5":"#265298","d734ab1e-b33f-43e6-9879-908daffd2fff":"#DEE5F0","7a2c6440-45eb-479e-9f86-4de577618806":"#94A3B8","f6a3882c-c920-46b5-a2e1-cc62571f6dc0":"#DFE3EA","b9c43272-24c8-4c9c-8972-fcb7971df70a":"#219653","5fdbb3e5-87ba-41ab-8f22-b490a513ce57":"#F2C94C","408f05fd-a799-407c-be48-766397fe6b2b":"#CE3F3F","6ec84b54-630d-4e54-b129-81a2e06acca3":"#2D9CDB","32ceabc3-14bb-4b32-94be-1534014b007b":"#6F530B","3894a226-0b1a-47f3-87d5-0919525b1698":"#C0C9D8","456f56b7-ceeb-4213-bfab-51aef90afa2e":"#1D3C6D","1156a7f3-b64b-40b6-8cac-a6a97ec8a47e":"#F1F6FF","b23992f6-7e3c-46ad-8796-a50665ad98f0":"#edf1fe","a9f33976-bf0e-4c20-b61c-8b10195ca42f":"#e8f3ff","926aeab5-1669-4413-9acf-c0a23e987366":"#c7d3fa","99f1af8b-d48d-4709-b08b-2c4880a8eaf7":"#abbdf8","b662d6b6-a945-40e6-843d-858a4e188981":"#859ff5","9faae9d8-5047-4d80-a18b-652f1726da95":"#6d8df3","436e8ff2-7bbc-4dc9-b27a-0e5b896f2a73":"#4970f0","c0873c83-c1e3-4818-b06f-05c53db3fdc0":"#3450aa","2635941a-12dd-4b8c-9108-78c3ffd5ce4c":"#283e84","a7e2c0ba-20b5-4434-b03c-2a6bd3f5b81c":"#1f2f65","4edf5e35-54c0-4ae5-a2eb-c909093cef04":"#eaebef","ab46b8dd-9b46-4cf4-bd59-295e712d4fe4":"#edf0f5","75847eb2-8865-43cf-8fc7-42b88002f985":"#bdc2cc","75f2ba8f-76df-4271-856a-1149dedaf4fb":"#9da4b3","f1972e66-cd4d-46db-bab7-f5a20367bd19":"#707b90","a44e23ee-560f-4424-9d85-48a301e53abd":"#55617b","d571056e-4297-49ae-a7ad-c707282a13c1":"#2a3a5a","2e747079-8f5d-4984-b9f4-f0271de8302f":"#263552","c059da5c-fcc4-4d50-b5c4-69acc68ee2ac":"#1e2940","8fa7c605-ff8f-4933-8572-e14d3ec19c71":"#172032","8ce3f01f-9c0e-430c-b820-229bd94b84e5":"#121826","c63534ba-9065-4124-865a-398c1c65296b":"#e7f6ec","75cfc3a5-6484-4c39-ab48-f5c85d54aba8":"#b5e3c4","2753e3b5-50ce-4a48-8e18-f2a214159073":"#91d6a8","41f5d28a-7c03-4efe-92ac-53333131c89a":"#5fc381","30c9949a-69c9-41bf-8ae0-d32ec66f4495":"#40b869","4d7e2bbe-8eaa-437e-84b6-b0636f5103b7":"#037f2d","221f0154-25f6-438a-9f4e-a78347e67b84":"#015b20","1a12b38c-ccef-4af0-a7e7-ba97d9f9b54f":"#fef6e7","910d021e-bab9-4377-a206-3e46f2a8fd7f":"#fbe2b7","583d5180-f9bb-4273-b7c9-bc64a19ac576":"#f7d394","2ae0b992-bf23-4796-bde6-b267b1636ce2":"#f5b546","df56e81a-9369-4b04-b7be-52740106430b":"#dd8f0d","17c7399f-9143-41df-b3bc-dbe48d247394":"#664001","c3f23d77-8a87-43d4-850e-e409cfc867c1":"#fbeae9","08b782d6-b751-4364-ab24-d19ee1412c3f":"#d3251f","682cb0ab-6f9a-4f39-a198-656c8d539966":"#ba110b","9ef2c79c-0bae-4699-817f-147e8bd78a4f":"#7f0501","6c90393f-6e8f-41dc-b6cd-fe27f9cd7eed":"#591000","0363ae2e-f669-4afb-8108-81ab992a64ec":"#f9f9fb","69588835-8957-4796-91a6-3df20ee9c7f4":"#eff1f4","77101647-9e3b-43aa-aeca-ae772a4ef1ff":"#d0d4dd","942ce2cf-7d90-4b9f-b964-84e065c6aedb":"#667185","114cb4cc-c285-40cd-9680-108dd7f08096":"#344054","afa6e7e5-aaf5-47e1-9cb9-de45dbe42563":"#1d2639","a8d04832-80fd-4363-ab1e-95b4ba64f579":"#ffffff","b6e29504-7406-45fe-ac44-3b85493678ad":"#000000","0d6ae005-5367-48e8-a474-83326bdbebf0":"#0f973d","5db70ef2-0c52-42c4-92d8-b19f0ad185b8":"#099137","4c59bd4a-4aa2-407a-b111-01655f6e0e9c":"#036b26","3af94785-a84f-4588-b9ea-62c1b63212eb":"#004617","25c05e26-7cfa-4fd4-98f9-cc29134ccb2d":"#f7c164","6583f794-4644-4a05-bc38-466d75e7181b":"#f3a118","071392d8-3c23-43c9-9547-5a3d5b836928":"#ad6f06","078fb121-677e-4c59-be53-6d965918d36d":"#865502","dfedd935-8084-4df7-8bc4-0bc68f50134b":"#523300","d8b4b10a-6023-45b4-b699-525903f3eda5":"#f2bbba","96721ad6-ea11-4dff-91ff-9968b98b56ea":"#eb9a98","9a0185c8-4d87-4032-aadf-0c3180b4e25f":"#e26e6a","9f65efbb-8ec4-400c-bcd1-20f884c5c916":"#dd514d","48289c77-c6e5-4d10-abf3-bd0171e6a5bc":"#ca1a14","80595560-fd1a-43b7-800e-17b7afc06725":"#9e0904","935ecc2d-bc44-48e6-a8cf-1747074a79f8":"#f7f9fc","776efcc7-ed80-45be-96ff-24aed6fad637":"#e4e7ec","a5f348fc-f603-4414-a383-e0bc8b8f32db":"#98a1b2","398b55cd-a145-40b5-81aa-64e938b5a045":"#475267","79ab5b40-5c85-4c26-a2ed-6a7f2d1ef4cd":"#101828","3bb8e08c-1861-4333-93c3-f46127d34568":"#f5cc54","dd2edf6a-e95e-40c3-b90e-1970cd9b0a24":"#000000","03f97d03-e8b5-4260-b9a6-84b4e9ac4edb":"#000000D9","db07d869-7076-4fff-8cb5-8f81b9060866":"#00000040","afb0622b-008d-4d99-893c-0f0ebe9cb2ae":"#00000073","7135d9d0-003f-4d5b-979b-4835ed0b65bd":"#0000000F","269e56d1-6215-4b79-9d82-7e6cee40fa2a":"#000000D9","8fbac7c3-9c29-4120-a916-efddf0ee92e0":"#00000040","b841af6a-0836-4052-adfd-99ee3aa9ee4a":"#FFFFFF","a30feb65-a942-4bac-9f38-16dfb4436c11":"#e1e3e5","02e08795-d352-49fd-bc93-5286044ef953":"#c2c7ce","c8122ad7-6c9a-437c-84eb-04e924772175":"#a3acb9","e04035ac-59ff-4f90-9036-1e77cda9cb24":"#8692a1","fdb7537c-e7ec-40ba-a311-0e01c275a6ee":"#6c7888","a74a44a9-425f-4705-b866-f1421c68df52":"#545f6c","781a330b-49ce-4467-80f7-40a4a21b1299":"#3f4750","34573081-741e-4f9b-bb0a-b54fa699d29d":"#2a2f34","04645073-e69e-4e73-80ef-5f1f56118c99":"#151618","44df1337-b30d-48d2-9cdf-9c0ce338502e":"#e2e2e2","b56a2bd5-4834-484d-8ecb-7760c0ebc14b":"#c7c7c7","e964af1c-8020-4e44-96df-93b418abf1ff":"#ababab","aed66389-4433-45b2-be66-5622e3df32e7":"#919191","5172739f-2906-4f10-a758-a1d4929606dc":"#777777","eb5500ae-9ab2-4f6a-83e9-afdc2e3bc1b2":"#5e5e5e","1804f5dd-ffbe-4d0f-a18e-7d9af9eb1c8f":"#464646","f0e9c89a-44ab-4e0e-b1d4-1c223f5c1088":"#2e2e2e","4cb797eb-6ee0-474f-b1dc-99461ce603bc":"#161616","9e8130f5-d6e8-45fe-a977-2cc5e23c6bbb":"#f8f8f7","0f661c98-70c5-4b0f-9ce1-6f860eb63b49":"#e5e2de","bb3eaa2d-d4b7-4b14-8e3d-245d1ff7d00b":"#cdc5bc","0b2b321a-ec10-4f3b-bbbb-469272549bdb":"#b5aa9c","6b06c6ba-a34b-4c75-ad9b-bfb7e3d302d4":"#9b8f7f","f61a0146-c1a8-43c8-84e7-9167aa1bb25f":"#817566","a182872b-7383-46fd-a619-8f51d0d52e37":"#675c50","7950677e-aad2-4e7e-a55b-a0e4b568b0c6":"#4c443b","a1277df6-36d4-45aa-b73c-b3e8c1ead1b5":"#322d27","bfdde87c-ea57-4199-bdd9-93db2a273c9a":"#181613","04b93f0a-1fe2-4b5d-8f1a-a487c7c67ef3":"#d1e4ff","d4334cce-a468-42bf-9a6d-51aed19f8289":"#a2caff","b5bcca88-2522-4e68-880e-aee6d63a2e47":"#6faeff","b8065e7d-980b-4ae1-9b66-71c23c085a2a":"#3090ff","c9179837-9d7e-4518-9fa7-8e065db8409d":"#0075df","9821eac7-4263-4bb8-964c-47ddd1b963cf":"#005db1","8bea7fb1-7617-43d7-8391-a42a8ba2ed9f":"#004585","18dcd57b-d6f9-4fa8-9967-a2082f8b8c8e":"#002e5b","dbefda4d-f2df-4a94-aa56-d154013e03e3":"#001631","e9446b2b-09b0-4e6b-90aa-7d5760edcf4b":"#f5ddcf","0fb23398-7e19-4878-943c-6cc4cb22e0c7":"#f6b791","032d8d1a-8928-494b-86d7-0b10c8b6bb69":"#f68c47","95f27f34-c853-49ff-ace4-f3d827bef530":"#de6c0b","d1b5feb5-be21-4239-a938-9b35641d53c2":"#b95700","5cf45ebd-4fc2-4d74-b7cf-022e9de4249f":"#944403","ea6e1fcd-450b-4bf8-a835-8c85eb7e7f73":"#6f3207","31c43a43-4017-45f3-a88b-fc93427b6464":"#49220a","61a949be-2329-417a-8c47-8d5060a73eed":"#231107","e3bb1f43-e60f-47a9-8d3d-f436511c95eb":"#faf8ed","b19a2186-b06d-4a00-abc7-59a8b7252439":"#f1e3a9","eaebb6eb-2114-42ef-9d3f-66c1037222f0":"#c8aa19","c17c036a-24b7-435f-b6d0-2be3936c5447":"#8d7500","14f92e1b-c639-4e6a-b09d-6a189218f090":"#544406","4f0c4735-5c98-4ddc-9714-73d4410e47f9":"#382d07","defdd300-5ef6-4a2e-9852-0328005bf8b7":"#f4faf3","23aa7fa3-11f0-4d27-aa14-fb0a7d2473ed":"#c6f0c5","b4a51e39-8e67-48ae-82b5-041ab116b358":"#53c954","4c0c4797-47f3-416e-8f49-9e7749abc810":"#2aad2c","efd91745-2fb2-4e7e-a5b0-9f0a372dcdcd":"#1e7118","e5693771-d83f-46ab-85b6-7e9b0f1ea8c3":"#1a3616","a0df6c5b-9408-4825-809c-bd96f7a6ccb8":"#faf7f7","fb469904-507a-456a-930a-982b7010ca01":"#f6efee","6bd67ea2-8fa9-43a5-8cf5-50f625558e3c":"#f3b5b0","c8ad9641-1f8b-4f9e-972e-24d3d7c79164":"#fa444d","fb8a0c40-ded1-491a-bac7-14016b364ef0":"#af1129","2c7bfcbf-d833-46b0-9e49-bff3a2696a1f":"#4f1a1c","abd52525-b934-474f-8b93-e976fece5f80":"#e3c645","1ddbd5a9-0bf6-4f67-99f4-c4846032af7f":"#ab8f05","24ab4fe2-969e-4cbc-9985-89c353066a89":"#705c03","13fc8b4f-a356-4975-ba62-96bb6aa8fd25":"#1c1604","fa4d9179-2c75-4b4e-ac46-90ca735cc6d2":"#e6f6e6","cacd1009-7dcd-4c7b-a9d4-8978050bcaf9":"#7ee27f","9475d0e1-b273-475a-b540-5fe7d8df2ea6":"#009100","ae584ace-7bbd-4b34-8713-e000815bf128":"#23521d","157c9b53-591d-410e-9018-916de18e1c0f":"#0d1a0a","dcf7d119-b64f-4e4f-ba82-20185e1e3375":"#f2dddb","74b3c7e8-14ef-4488-9962-388f8c533d23":"#f78580","1c7b698e-806f-42aa-87ae-3ca740940b00":"#de0030","dba3598f-a6ac-4791-a54d-c335ef510ac8":"#7e1a23","199b6fa5-1912-4926-801c-ad88ee962d63":"#241010","b44bfa26-84ac-4ce2-805c-6ab1ba8e9fec":"#f7f1d9","5e7f9d06-2093-42b5-b06f-3c49c3cc5696":"#f2f0ef","6c1d3a95-c836-4dc6-9135-2e0ce966be72":"#f8f8f8","b8db72c0-cb8d-4f74-8de8-ae23882ccea2":"#f0f1f1","a9bc8da4-0ee2-46ab-97aa-5980cd432c9e":"#fbf7f4","8c2636a5-8f0c-4dd3-b5dc-1db6770c94fd":"#f8efe9","530fd98b-c9ff-4178-8122-dfa61ebd54b2":"#f8f8f8","be1705aa-2fa3-45e3-9a2d-b1e3154688a1":"#f1f1f1","08b2c1eb-4626-4895-ad53-022caf0279fe":"#f4f8ff","57730e5b-3d41-4c65-b5c5-591a2b4f2c6c":"#e8f2ff","d3a49805-61f0-4926-8c06-2e1f90e2150d":"#FFFFFF","4fd32e58-0ffb-4053-af73-60b8aa50f3d0":"#000000","e99015b2-d7be-4178-bf00-1f92dc4144f1":"#f6f6f6","109b4a3f-df38-480a-96de-6449b87720cd":"#e7e7e7","9fd322cb-5399-4536-bf8e-939a194d05db":"#b0b0b0","fdf68224-d7d8-4f83-9fb5-314d826f9a5f":"#888888","f104bb44-6aab-4947-8e96-cb89cc15b033":"#6d6d6d","cef0aae5-9d67-4fcf-9d79-755caaaf6938":"#5d5d5d","32701286-8243-4e7c-ae37-942ffd9813f5":"#3d3d3d","892b3030-2c4b-4a72-b57c-c33abd971952":"#222222","f044ba99-3ee7-4ae3-ab37-c3484f7b4050":"#060f11","cd42601f-3954-4e4e-9e95-51692b8dcebc":"#1F79FE","3c270a3b-19ff-48ed-8623-eac8c6bd1ab9":"#0E3C7F","4932bda3-f7ea-4905-8b9c-740fe9463b6d":"#FFFFFF","a6d57a2f-b240-402d-958b-7e612708a37b":"#000000","ae5eb0d2-5971-4a47-8307-6f6cb4f8e314":"#f6f6f6","4bf361aa-54a8-4ddd-9f01-eded51616ed2":"#e7e7e7","09d8e6fe-a142-4d70-9e9f-017a2296e898":"#b0b0b0","330b3d13-764c-44b8-9974-8bbc519411be":"#888888","14397b47-e12a-4ab7-becb-e77fd8d89972":"#6d6d6d","84a8b515-e613-42d9-b0c8-da2d4a84eb60":"#5d5d5d","df12a772-23fc-4fa4-8ac0-e6d60c78100f":"#3d3d3d","7f437e1f-86d4-4ad9-8417-d3c0808ab4b5":"#222222","682e4e18-b455-4c05-9690-3e4edc875257":"#060f11","d70b7472-b966-4742-9285-63118edd81c3":"#1F79FE","d96f26ea-82e5-432b-8de2-8f8266e9289d":"#0E3C7F","2d2f679a-3955-4d6d-9744-82d452a34c6d":"rgb(51, 65, 85)","fdd51ce6-3a91-46b9-8f19-398bc399db44":"rgb(100, 116, 139)"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"35799ef1-5d52-4199-bd04-d2120cd8f616":"4px","66678830-010f-4a7c-b3e1-61f53fa80c94":"8px","f2599fc9-90ea-4334-98fc-769bf3fe4156":"12px","12bbef23-1397-4c8f-a4e1-cf7d32917ae1":"16px","d08e60f5-116c-4165-8b71-9131d04486c0":"20px","c3047c37-ae22-4bb8-9daf-29d58dc7d1cb":"24px","8d997aa0-a04d-4133-a6e4-286a3b18c8f9":"28px","d6c22cb0-79b3-4ef2-8f64-ab9ed3e22a6d":"32px","8d35ab7e-5190-4c54-8bd5-258ba152ca72":"40px","1edde038-eba3-48da-a1fa-6e18202f02b5":"48px","6da560cf-258c-402c-a345-846240237f6e":"64px","9861e8a9-8211-4562-a80f-0ed99f7bbc6b":"96px","8aeadd49-add4-4cce-99ee-0af7058e4c1d":"128px","7c0e089a-f571-4be4-938b-8b0bb3df4212":"160px","5561c666-4ccb-42cd-b75c-01ff34a207f8":"192px","aabd9328-9b73-4f36-917b-2b096182315d":"0.25rem","10e3c6fe-139c-45f8-a29d-266c20f3b4a6":"0.5rem","39a6285f-6e89-49f1-9eca-eda535a0578f":"0.75rem","658c94ee-9a55-4b8d-ae82-c29ac785de37":"1rem","56c54659-bdfd-440a-8068-717d609eef99":"1.25rem","0443d473-fe9b-40ab-ab14-7511098fc12a":"1.5rem","0f885159-4d3a-48ec-8a69-a2de0f8bf363":"1.75rem","dd5bf382-f880-4b5d-b574-d88fb66966e4":"2rem","241b702c-f2c2-494b-88f4-c9ee295f2c12":"2.5rem","bcce2fb8-a3c8-4b6d-87f0-257c8a418212":"3rem","8b4f2b1b-16c2-43a2-a067-6ab9e9867e55":"4rem","16b48fa4-dca6-48e6-b374-cb1be99f813f":"5rem","eb645b18-c206-492b-b44e-aeccbac36363":"6rem","54b7415a-7056-4c69-a0a4-411c34376fa0":"8rem","860b7443-83ed-411b-9873-128d0f6234e1":"10rem","8cad3f03-4365-4a07-bf30-4196b3a5010a":"12rem","b25f5dbe-3945-4ab2-bdba-d996466b98de":"80px","e9134c4f-1aec-43bc-9281-d25b93365850":"0.125rem","802450d4-96e6-46b9-88b5-4ff2ad0c2a9c":"4px","0a3be4c7-8af6-4f2a-8356-cfc9a654bedb":"8px","d3c878ba-280d-4a58-b439-dec4f641301e":"12px","c5f92a83-8757-46c9-a0b3-a6def1d6d25f":"16px","35f471a8-fb6a-4b4f-85cd-d6eb927956ee":"20px","b4d95d06-8a9f-4fbc-8696-2796a7a458b2":"24px","f52b33fb-9a7f-462d-b467-a670c2a12f7f":"2px","b363e15d-300e-4ff3-b2ac-f63ea21f5e16":"4px","7f9785c9-45e0-4bab-91b0-6122b1deafe7":"8px","02c62812-8afe-4200-a60a-2d9bd080e86c":"12px","492a9411-1702-4f94-828e-f03daf553237":"16px","6f3edf1a-cab9-4568-8e22-f912fa436965":"20px","b1f0e218-59f1-44f9-bc1e-eb5e50523d75":"32px","407b6723-0694-4e59-8df2-b5259c1d28d5":"40px","78490985-6b3f-48bb-a2ef-8187f3bfc8a6":"2px","b2d49095-73cd-4632-b124-3d4143f7c49f":"96px","17765de1-737d-44c4-9500-c97f2432130c":"45px","0a048f45-5558-4f22-b33b-29b6b955b7fa":"16px","dbc2c56a-8941-4906-aa62-03a88727a994":"256px","f8f4ecaa-d0c0-4f03-85ef-612b9d9c31ab":"96px","34cf215e-55f0-4f6b-9d32-70dd1707ba82":"45px","e9c57d32-e7f0-426d-830f-f06cad642b83":"16px","8d6c682d-f2c7-4be5-8b01-c6bc819c0d1b":"256px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"8920370c-243a-42ca-b380-592f9733529c":"400 16px/normal var(--ww-default-font-family, sans-serif)","30e1c2fc-6abc-4098-afb1-053edd249ae0":"200 50px/normal var(--ww-default-font-family, sans-serif)","eae00865-c5d3-4963-b5a9-ed3de5792ee0":"300 22px/20px var(--ww-default-font-family, sans-serif)","590746c6-330c-4176-8907-52c4d9600804":"200 30px/normal 'Roboto', sans-serif","a3b8a701-492f-41f3-9413-ba750a52a2ff":"300 16px/23px var(--ww-default-font-family, sans-serif)","4c9c4369-e877-4e4a-90bd-4797e218d1c3":"200 27px/normal var(--ww-default-font-family, sans-serif)","5107fb98-b70d-4272-8121-afcc44e4071b":"200 25px/normal var(--ww-default-font-family, sans-serif)","f3162af5-9811-4901-98c3-71e2e10d95e9":"200 19px/normal var(--ww-default-font-family, sans-serif)","401761c9-f67d-4ca0-8bce-6fad8f461b1f":"300 13px/20px var(--ww-default-font-family, sans-serif)","96360249-1998-4c11-88d9-671db87db4bb":"300 22px/normal var(--ww-default-font-family, sans-serif)","a999ae46-c612-4882-b318-12071293b47e":"400 50px/normal 'Roboto', sans-serif","dcc86df2-4204-4fa6-b466-bac1106bcc10":"400 12px/normal var(--ww-default-font-family, sans-serif)","1c0a338f-4787-4cce-a8dc-99578a138151":"600 14px/normal var(--ww-default-font-family, sans-serif)","f3f274b3-eaa3-45b2-ac7e-422b306a1081":"600 12px/normal var(--ww-default-font-family, sans-serif)","17455329-53a7-4d0d-be3a-3bf6b0a979e9":"500 3.5rem/100% var(--ww-default-font-family, sans-serif)","ad4c9452-1f35-4fcb-863f-d82b45f6641f":"600 3.5rem/100% var(--ww-default-font-family, sans-serif)","6db47313-678c-473e-8c39-df6bf8b5f9fe":"700 3.5rem/100% var(--ww-default-font-family, sans-serif)","9751aa3b-7513-49e9-95ff-b8afea1fadb6":"400 2.75rem/100% var(--ww-default-font-family, sans-serif)","d19684a6-2fac-4abf-8fe3-42da9d3e4088":"500 2.75rem/100% var(--ww-default-font-family, sans-serif)","4ea7a9fb-6a66-45b7-95b5-58f82c400956":"600 2.75rem/100% var(--ww-default-font-family, sans-serif)","644f63bc-9a49-4df5-ab78-6ff0f240a822":"700 2.75rem/100% var(--ww-default-font-family, sans-serif)","ac347f67-147f-4da4-b1e7-e86b28d70afb":"400 2.75rem/100% var(--ww-default-font-family, sans-serif)","416f09ae-2f56-4aae-9fe1-ba66870e39e1":"500 2.75rem/100% var(--ww-default-font-family, sans-serif)","83e4e245-8c08-4b81-ac0a-64a01d803917":"600 2.75rem/100% var(--ww-default-font-family, sans-serif)","0965d5a0-a2ce-45c6-bb0c-d95223c5255b":"700 2.75rem/100% var(--ww-default-font-family, sans-serif)","ccfc652f-f4f6-4428-93ea-d8a4512c2c7e":"400 2.25rem/100% var(--ww-default-font-family, sans-serif)","17cd3679-5829-4eef-bddd-c5090b59fa08":"600 2.25rem/100% var(--ww-default-font-family, sans-serif)","6f73f8da-4c6c-4494-8705-6e880183f27a":"700 2.25rem/100% var(--ww-default-font-family, sans-serif)","59bde4d6-cd74-4ae5-baf5-073a346be911":"500 2.25rem/100% var(--ww-default-font-family, sans-serif)","f3d4fced-1f14-46ca-ab4a-59e39c0bc7b0":"400 2rem/120% var(--ww-default-font-family, sans-serif)","acd2575f-2baa-410f-9a77-6d344f6abd53":"500 2rem/120% var(--ww-default-font-family, sans-serif)","db9f8807-9511-4c12-918f-9625c394db3b":"600 2rem/120% var(--ww-default-font-family, sans-serif)","6585de76-e4ae-4307-857d-060885560f0a":"700 2rem/120% var(--ww-default-font-family, sans-serif)","ce005c70-6cec-4d08-885e-264b3f40fbb5":"400 1.75rem/120% var(--ww-default-font-family, sans-serif)","4d8f6acb-a8cc-4ce4-b48a-61a92a91b7a9":"500 1.75rem/120% var(--ww-default-font-family, sans-serif)","4497537e-9c34-44ee-b92e-c194868af98c":"600 1.75rem/120% var(--ww-default-font-family, sans-serif)","d7b7d78f-4199-46f8-9e8a-6bc8ee37985d":"700 1.75rem/120% var(--ww-default-font-family, sans-serif)","35e9491b-d15e-4856-84f8-68806d1ee79b":"400 1.5rem/120% var(--ww-default-font-family, sans-serif)","59d07f5e-869e-4c79-afbd-bea4b18fd25c":"500 1.5rem/120% var(--ww-default-font-family, sans-serif)","12546182-01e1-4924-9493-8f1b987b699e":"600 1.5rem/120% var(--ww-default-font-family, sans-serif)","d18608ec-57c2-42c0-b354-4fb36975b368":"700 1.5rem/120% var(--ww-default-font-family, sans-serif)","f5b1efc6-7384-4d12-a795-fe4810a435c6":"400 1.25rem/120% var(--ww-default-font-family, sans-serif)","6f260a14-c7ea-4bb4-9ea4-9fd57c4b101f":"500 1.25rem/120% var(--ww-default-font-family, sans-serif)","7a22587d-543c-49cf-b6b2-4d3afd324ae3":"600 1.25rem/120% var(--ww-default-font-family, sans-serif)","97d239f1-0efd-4018-8164-bd5652be4afd":"700 1.25rem/120% var(--ww-default-font-family, sans-serif)","a2ba3c01-ffaa-46a8-bb0b-85395acf4d79":"600 1.5rem/145% var(--ww-default-font-family, sans-serif)","da3c2541-89c3-4b1e-a220-82c6abbaedfc":"400 18px/145% var(--ww-default-font-family, sans-serif)","0615ba44-dcbb-47d1-802f-b385a3ecf341":"400 1.25rem/145% var(--ww-default-font-family, sans-serif)","f97b4ddf-54a3-4750-9fb0-c1f8516257a5":"500 1.25rem/145% var(--ww-default-font-family, sans-serif)","ef13c534-aa43-4401-a425-f38d5bdaef5f":"600 1.25rem/145% var(--ww-default-font-family, sans-serif)","00990f19-c591-4949-a954-df40eeb41e5f":"400 16px/undefined var(--ww-default-font-family, sans-serif)","50d75596-3593-478d-a7a2-16de258c589e":"400 0.875rem/145% var(--ww-default-font-family, sans-serif)","9b4ea0d2-01df-4e33-82c1-ced6bee015e5":"500 0.875rem/145% var(--ww-default-font-family, sans-serif)","22302a9d-9179-40d6-9128-3725fa4cd0e7":"400 0.875rem/145% var(--ww-default-font-family, sans-serif)","2d937713-b7d1-4078-9c58-2df6c9cd9bd2":"500 0.75rem/145% var(--ww-default-font-family, sans-serif)","f3c97b77-a8ad-40fd-b3eb-30975ea7a40c":"600 0.75rem/145% var(--ww-default-font-family, sans-serif)","67101874-719d-4ec7-8baa-eaae74e50266":"400 0.75rem/145% var(--ww-default-font-family, sans-serif)","46e34128-fa3c-45c3-ba40-396ba3e4b60a":"400 0.75rem/145% var(--ww-default-font-family, sans-serif)","c0ad92c7-a388-41a9-96d5-16e0ac1e5123":"600 0.75rem/120% var(--ww-default-font-family, sans-serif)","17430b43-c47e-41a7-8d72-b551607fb461":"400 1.5rem/145% var(--ww-default-font-family, sans-serif)","6c7e0be5-8afa-4d06-84b3-75f47ecb715f":"500 1.5rem/145% var(--ww-default-font-family, sans-serif)","257838e2-3252-4243-883e-3935841730cd":"400 18px/145% var(--ww-default-font-family, sans-serif)","aec9cee6-23f1-49c0-9b04-fbd0bdec05c9":"400 18px/145% var(--ww-default-font-family, sans-serif)","1a11655d-329d-4e26-bd7f-965d920added":"400 16px/undefined var(--ww-default-font-family, sans-serif)","1507f70b-7a98-4732-b4a0-c1990b4f50ac":"400 16px/undefined var(--ww-default-font-family, sans-serif)","006c861b-8214-47a3-8e9c-c96f48c6582d":"600 0.875rem/145% var(--ww-default-font-family, sans-serif)","366e265f-398d-45e0-ab48-67a89aa2305f":"400 0.875rem/145% var(--ww-default-font-family, sans-serif)","8bf55c72-c8d4-452a-914c-297aa4f84f0f":"400 0.875rem/145% var(--ww-default-font-family, sans-serif)","13ac78de-d619-4f25-98a1-e2838850f26e":"400 0.75rem/145% var(--ww-default-font-family, sans-serif)","9604cda8-c76c-41e7-9f4e-227d6b4a9b14":"400 0.75rem/145% var(--ww-default-font-family, sans-serif)","6bd311e1-a4a8-4399-b357-531c14edb66f":"600 0.625rem/120% var(--ww-default-font-family, sans-serif)","82ea85ec-a232-4924-aea2-94b25de00554":"400 3.5rem/100% var(--ww-default-font-family, sans-serif)","0c8b5097-dd53-4754-9d1f-a9772cfb47b9":"600 0.875rem/120% var(--ww-default-font-family, sans-serif)","8d59fbad-30b5-42c9-a49b-96a310236806":"500 1rem/145% var(--ww-default-font-family, sans-serif)","8769792d-6c15-47ac-89fb-20ae69b2eede":"400 1rem/145% var(--ww-default-font-family, sans-serif)","06c6034f-dc66-488e-b79e-24bc1356a914":"600 1rem/145% var(--ww-default-font-family, sans-serif)","7419c94a-472d-45eb-89ac-debf7ef21b35":"400 14px/22px var(--ww-default-font-family, sans-serif)","b49b91a8-996d-45e6-ae47-795f8322c041":"500 38px/46px var(--ww-default-font-family, sans-serif)","e9d2a21b-ea8d-459b-87bf-131e4d6af9ee":"500 30px/40px var(--ww-default-font-family, sans-serif)","8d14c83a-63a5-4f4f-a12a-97af4258074d":"500 24px/32px var(--ww-default-font-family, sans-serif)","1a3aa549-d178-4106-bc9e-5d1e7bb34c8c":"500 16px/24px var(--ww-default-font-family, sans-serif)","6b591379-573d-425b-bc53-12a4426e1513":"600 14px/22px var(--ww-default-font-family, sans-serif)","d9f75b67-53a7-4a7f-9a0e-f4ab7985cde6":"400 12px/20px var(--ww-default-font-family, sans-serif)","4ef5bd5d-6c26-4512-8a87-f23d0269918a":"600 16px/24px var(--ww-default-font-family, sans-serif)","af4a2331-71bc-44af-9661-b38551756eab":"600 12px/18px var(--ww-default-font-family, sans-serif)","dba66191-af24-45ac-ae67-dd3770eec837":"400 12px/18px var(--ww-default-font-family, sans-serif)","04a090b3-eb67-4f3d-8946-bb1896dd0c4b":"400 16px/22px var(--ww-default-font-family, sans-serif)","0fa89c8c-d0cf-4c33-81cc-1a4524267593":"400 12px/20px var(--ww-default-font-family, sans-serif)","38ffbeff-764d-4bfc-9245-65b7bc0554d3":"500 20px/28px var(--ww-default-font-family, sans-serif)","f0d118f6-8610-4be0-85a6-7732ededbcbd":"400 60px/60px var(--ww-default-font-family, sans-serif)","c3f20f8d-c404-4890-a149-528c554d3a45":"400 48px/52px var(--ww-default-font-family, sans-serif)","188c18b9-1d63-48aa-b183-a0e339c28999":"400 36px/36px var(--ww-default-font-family, sans-serif)","b47fda5e-c8a2-479d-a3d2-000ef4b6ee4e":"400 24px/30px var(--ww-default-font-family, sans-serif)","d92a1cb7-94b6-4feb-9413-e70e51979f97":"400 18px/26px var(--ww-default-font-family, sans-serif)","f2a71115-b847-4f32-ade9-6ec28c04d178":"400 16px/24px var(--ww-default-font-family, sans-serif)","6991fe26-2f58-467a-a1c7-e9a576888df6":"400 12px/16px var(--ww-default-font-family, sans-serif)","413f19fe-06f4-4af0-bc58-613b9c444489":"300 48px/52px var(--ww-default-font-family, sans-serif)","36c90402-a417-43a8-9707-91580919116e":"300 24px/30px var(--ww-default-font-family, sans-serif)","fd2aa2ea-6285-4979-9dd4-0afe769b1cf7":"300 16px/24px var(--ww-default-font-family, sans-serif)","0ed994cb-55a6-4345-a079-6317154abeb9":"300 12px/16px var(--ww-default-font-family, sans-serif)","47176e75-5460-40c9-add9-f675437da5c3":"500 60px/60px var(--ww-default-font-family, sans-serif)","a46682a1-6522-4402-851e-ac1aba0b897c":"500 36px/36px var(--ww-default-font-family, sans-serif)","f59d015e-c1a5-41b0-a0bd-d7685bfa9e04":"500 18px/26px var(--ww-default-font-family, sans-serif)","90e4433f-28ec-48c5-8432-3a4ad4f12c6a":"500 14px/20px var(--ww-default-font-family, sans-serif)","1a0dc46e-3d23-4ac0-ada4-bc80d295dd7f":"500 11px/16px var(--ww-default-font-family, sans-serif)","e6d49f9e-afe0-4248-8d07-d27a1c9b6230":"700 48px/52px var(--ww-default-font-family, sans-serif)","63427591-e191-4f49-bcd0-e63f63c1f0d0":"700 24px/30px var(--ww-default-font-family, sans-serif)","ad5de84f-abf6-4f14-81d9-ee7fdc1674f6":"700 16px/24px var(--ww-default-font-family, sans-serif)","4dba5634-32ac-49d9-9e3b-1c227801b3a8":"700 12px/16px var(--ww-default-font-family, sans-serif)","f4a28b33-58fd-41ca-b1fd-feda6a0a7e75":"400 14px/20px var(--ww-default-font-family, sans-serif)","c895a4f5-7855-4344-9a83-dff3321d79e6":"400 11px/16px var(--ww-default-font-family, sans-serif)","b593a132-fc74-46b5-beca-3b5698188264":"300 60px/60px var(--ww-default-font-family, sans-serif)","306b96db-c31c-4957-832b-199fd5382cb2":"300 36px/36px var(--ww-default-font-family, sans-serif)","a849b37a-ec69-4519-8689-7ca0ec99905e":"300 18px/26px var(--ww-default-font-family, sans-serif)","355d65f8-3e12-4e04-a4d3-3181e93175b8":"300 14px/20px var(--ww-default-font-family, sans-serif)","c455b4ea-99a3-49f6-a60c-659ec8afdf31":"300 11px/16px var(--ww-default-font-family, sans-serif)","c924f875-829c-4696-8dbc-a392f579d23f":"500 48px/52px var(--ww-default-font-family, sans-serif)","3d798d9f-1dff-4804-987f-f3a7192ef9c9":"500 24px/30px var(--ww-default-font-family, sans-serif)","a610bd35-596d-4cec-b59c-6aa7e996721b":"500 16px/24px var(--ww-default-font-family, sans-serif)","d7a3303e-30a9-4e87-a23c-cb6e262d91e7":"500 12px/16px var(--ww-default-font-family, sans-serif)","261e7097-5da3-4f2d-98ce-77accbcaabb3":"700 60px/60px var(--ww-default-font-family, sans-serif)","5cd34ef8-3e66-48d9-a40c-173b6be0752a":"700 36px/40px var(--ww-default-font-family, sans-serif)","4e3cfba6-0330-4c70-bf29-d8dd3d4d3b94":"700 18px/26px var(--ww-default-font-family, sans-serif)","665adc55-24af-4037-8838-a84d19562ea2":"700 14px/20px var(--ww-default-font-family, sans-serif)","94e99de8-68eb-4787-80af-c99d29e791d5":"700 11px/16px var(--ww-default-font-family, sans-serif)","8ded8220-9703-4a3f-b9f5-b9fe1d02989a":"400 18px/30px var(--ww-default-font-family, sans-serif)","a785476a-b458-48d5-bf3e-19e6d55625f1":"500 24px/45px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes( //TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(process.env.VUE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
