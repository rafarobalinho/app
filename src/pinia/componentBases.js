import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0': getInheritedConfiguration({ ...require('@/components/plugins/plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0/ww-config.js').default, name: 'plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0' }),
'plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b': getInheritedConfiguration({ ...require('@/components/plugins/plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b/ww-config.js').default, name: 'plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b' }),
'plugin-f5856798-485d-47be-b433-d43d771c64e1': getInheritedConfiguration({ ...require('@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/ww-config.js').default, name: 'plugin-f5856798-485d-47be-b433-d43d771c64e1' }),
'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7': getInheritedConfiguration({ ...require('@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/ww-config.js').default, name: 'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7' }),
'plugin-6a64802c-52f8-4637-9932-580bf178aaa7': getInheritedConfiguration({ ...require('@/components/plugins/plugin-6a64802c-52f8-4637-9932-580bf178aaa7/ww-config.js').default, name: 'plugin-6a64802c-52f8-4637-9932-580bf178aaa7' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...require('@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js').default, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d': getInheritedConfiguration({ ...require('@/components/sections/section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d/ww-config.js').default, name: 'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d' }),
'wwobject-fba0c85a-feb7-4384-82fb-380b0276169a': getInheritedConfiguration({ ...require('@/components/elements/element-fba0c85a-feb7-4384-82fb-380b0276169a/ww-config.js').default, name: 'wwobject-fba0c85a-feb7-4384-82fb-380b0276169a' }),
'wwobject-58d13ef1-9571-4c1d-86b6-96eff6d719ee': getInheritedConfiguration({ ...require('@/components/elements/element-58d13ef1-9571-4c1d-86b6-96eff6d719ee/ww-config.js').default, name: 'wwobject-58d13ef1-9571-4c1d-86b6-96eff6d719ee' }),
'wwobject-b0d8dcc1-30b2-452e-b6f1-af5fad558a86': getInheritedConfiguration({ ...require('@/components/elements/element-b0d8dcc1-30b2-452e-b6f1-af5fad558a86/ww-config.js').default, name: 'wwobject-b0d8dcc1-30b2-452e-b6f1-af5fad558a86' }),
'wwobject-12220806-894d-4667-a96e-598262b8d531': getInheritedConfiguration({ ...require('@/components/elements/element-12220806-894d-4667-a96e-598262b8d531/ww-config.js').default, name: 'wwobject-12220806-894d-4667-a96e-598262b8d531' }),
'wwobject-c98cf519-178d-46c6-a0c3-170bd1699feb': getInheritedConfiguration({ ...require('@/components/elements/element-c98cf519-178d-46c6-a0c3-170bd1699feb/ww-config.js').default, name: 'wwobject-c98cf519-178d-46c6-a0c3-170bd1699feb' }),
'wwobject-f55b24ed-07b1-4d29-947e-abf7c37c8ba2': getInheritedConfiguration({ ...require('@/components/elements/element-f55b24ed-07b1-4d29-947e-abf7c37c8ba2/ww-config.js').default, name: 'wwobject-f55b24ed-07b1-4d29-947e-abf7c37c8ba2' }),
'wwobject-5e1b9eca-9711-48f0-9de9-6610247cae37': getInheritedConfiguration({ ...require('@/components/elements/element-5e1b9eca-9711-48f0-9de9-6610247cae37/ww-config.js').default, name: 'wwobject-5e1b9eca-9711-48f0-9de9-6610247cae37' }),
'wwobject-6a0edc41-ab81-46a6-a9ef-7844ef5ea73e': getInheritedConfiguration({ ...require('@/components/elements/element-6a0edc41-ab81-46a6-a9ef-7844ef5ea73e/ww-config.js').default, name: 'wwobject-6a0edc41-ab81-46a6-a9ef-7844ef5ea73e' }),
'wwobject-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e': getInheritedConfiguration({ ...require('@/components/elements/element-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e/ww-config.js').default, name: 'wwobject-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e' }),
'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299': getInheritedConfiguration({ ...require('@/components/elements/element-af811adf-94d9-49dd-ab22-e2f29ae30299/ww-config.js').default, name: 'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299' }),
'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba': getInheritedConfiguration({ ...require('@/components/elements/element-aeb78b9a-6fb6-4c49-931d-faedcfad67ba/ww-config.js').default, name: 'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba' }),
'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b': getInheritedConfiguration({ ...require('@/components/elements/element-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b/ww-config.js').default, name: 'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b' }),
'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398': getInheritedConfiguration({ ...require('@/components/elements/element-6ba133b6-a444-414f-93a5-25cd237dd398/ww-config.js').default, name: 'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398' }),
'wwobject-70a53858-53ca-40a5-ad88-c1cd33b5cc9f': getInheritedConfiguration({ ...require('@/components/elements/element-70a53858-53ca-40a5-ad88-c1cd33b5cc9f/ww-config.js').default, name: 'wwobject-70a53858-53ca-40a5-ad88-c1cd33b5cc9f' }),
'wwobject-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488': getInheritedConfiguration({ ...require('@/components/elements/element-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488/ww-config.js').default, name: 'wwobject-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488' }),
'wwobject-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34': getInheritedConfiguration({ ...require('@/components/elements/element-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34/ww-config.js').default, name: 'wwobject-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34' }),
'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e': getInheritedConfiguration({ ...require('@/components/elements/element-0dc461bb-103e-4b2e-80e0-846ec3c30a6e/ww-config.js').default, name: 'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e' }),
'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da': getInheritedConfiguration({ ...require('@/components/elements/element-0d3e75d1-9e77-44cb-a272-8b0825fbc5da/ww-config.js').default, name: 'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...require('@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js').default, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...require('@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js').default, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...require('@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js').default, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-88ef76b6-46d5-4685-878f-2f1fa0d54cb8': getInheritedConfiguration({ ...require('@/components/elements/element-88ef76b6-46d5-4685-878f-2f1fa0d54cb8/ww-config.js').default, name: 'wwobject-88ef76b6-46d5-4685-878f-2f1fa0d54cb8' }),
'wwobject-73a13eff-bdc7-4021-bdc6-413c97fe91c1': getInheritedConfiguration({ ...require('@/components/elements/element-73a13eff-bdc7-4021-bdc6-413c97fe91c1/ww-config.js').default, name: 'wwobject-73a13eff-bdc7-4021-bdc6-413c97fe91c1' }),
'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5': getInheritedConfiguration({ ...require('@/components/elements/element-9256b033-f4e8-4ab4-adce-dac3a940d7f5/ww-config.js').default, name: 'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5' }),
'wwobject-a823467c-bdc7-4cec-a38c-71875c4c214a': getInheritedConfiguration({ ...require('@/components/elements/element-a823467c-bdc7-4cec-a38c-71875c4c214a/ww-config.js').default, name: 'wwobject-a823467c-bdc7-4cec-a38c-71875c4c214a' }),
'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff': getInheritedConfiguration({ ...require('@/components/elements/element-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff/ww-config.js').default, name: 'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff' }),
'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d': getInheritedConfiguration({ ...require('@/components/elements/element-985570fc-b3c0-4566-8004-82ab3b30a11d/ww-config.js').default, name: 'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...require('@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js').default, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-7179ba70-c5d7-49a5-9828-f85704fd1efc': getInheritedConfiguration({ ...require('@/components/elements/element-7179ba70-c5d7-49a5-9828-f85704fd1efc/ww-config.js').default, name: 'wwobject-7179ba70-c5d7-49a5-9828-f85704fd1efc' }),
'wwobject-9202d35c-2813-45bc-a7f3-0adb85f83e5e': getInheritedConfiguration({ ...require('@/components/elements/element-9202d35c-2813-45bc-a7f3-0adb85f83e5e/ww-config.js').default, name: 'wwobject-9202d35c-2813-45bc-a7f3-0adb85f83e5e' }),
'wwobject-2fd375f8-f5c7-4d81-881d-dacd40bc0ad3': getInheritedConfiguration({ ...require('@/components/elements/element-2fd375f8-f5c7-4d81-881d-dacd40bc0ad3/ww-config.js').default, name: 'wwobject-2fd375f8-f5c7-4d81-881d-dacd40bc0ad3' }),
'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7': getInheritedConfiguration({ ...require('@/components/elements/element-aa27b26f-0686-4c29-98c5-8217044045b7/ww-config.js').default, name: 'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...require('@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js').default, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' }),
'wwobject-6dee3327-9afa-4b44-bade-bdb547cdb18b': getInheritedConfiguration({ ...require('@/components/elements/element-6dee3327-9afa-4b44-bade-bdb547cdb18b/ww-config.js').default, name: 'wwobject-6dee3327-9afa-4b44-bade-bdb547cdb18b' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...require('@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js').default, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...require('@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js').default, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-14723a21-0178-4d92-a7e9-d1dfeaec29a7': getInheritedConfiguration({ ...require('@/components/elements/element-14723a21-0178-4d92-a7e9-d1dfeaec29a7/ww-config.js').default, name: 'wwobject-14723a21-0178-4d92-a7e9-d1dfeaec29a7' }),
'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82': getInheritedConfiguration({ ...require('@/components/elements/element-59dca300-db78-42e4-a7a6-0cbf22d3cc82/ww-config.js').default, name: 'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82' }),
'wwobject-8aaf3651-1351-4aea-8b38-5d10ebc7fb69': getInheritedConfiguration({ ...require('@/components/elements/element-8aaf3651-1351-4aea-8b38-5d10ebc7fb69/ww-config.js').default, name: 'wwobject-8aaf3651-1351-4aea-8b38-5d10ebc7fb69' }),
'wwobject-9ccf84b0-e542-4423-869f-b4828301ec49': getInheritedConfiguration({ ...require('@/components/elements/element-9ccf84b0-e542-4423-869f-b4828301ec49/ww-config.js').default, name: 'wwobject-9ccf84b0-e542-4423-869f-b4828301ec49' }),
'wwobject-5a88036f-22ea-4f8d-b4a5-bc226ef95061': getInheritedConfiguration({ ...require('@/components/elements/element-5a88036f-22ea-4f8d-b4a5-bc226ef95061/ww-config.js').default, name: 'wwobject-5a88036f-22ea-4f8d-b4a5-bc226ef95061' }),
'wwobject-53401515-b694-4c79-a88d-abeecb1de562': getInheritedConfiguration({ ...require('@/components/elements/element-53401515-b694-4c79-a88d-abeecb1de562/ww-config.js').default, name: 'wwobject-53401515-b694-4c79-a88d-abeecb1de562' }),
'wwobject-3265984a-eb92-4d73-b702-dbd0e4d1472e': getInheritedConfiguration({ ...require('@/components/elements/element-3265984a-eb92-4d73-b702-dbd0e4d1472e/ww-config.js').default, name: 'wwobject-3265984a-eb92-4d73-b702-dbd0e4d1472e' }),
'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340': getInheritedConfiguration({ ...require('@/components/elements/element-1b1e2173-9b78-42cc-a8ee-a6167caea340/ww-config.js').default, name: 'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340' }),
'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65': getInheritedConfiguration({ ...require('@/components/elements/element-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65/ww-config.js').default, name: 'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65' }),
'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0': getInheritedConfiguration({ ...require('@/components/elements/element-6d692ca2-6cdc-4805-aa0c-211102f335d0/ww-config.js').default, name: 'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0' }),
'wwobject-c8199d0d-b61f-4640-98e0-c4be9ea254e0': getInheritedConfiguration({ ...require('@/components/elements/element-c8199d0d-b61f-4640-98e0-c4be9ea254e0/ww-config.js').default, name: 'wwobject-c8199d0d-b61f-4640-98e0-c4be9ea254e0' }),
'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5': getInheritedConfiguration({ ...require('@/components/elements/element-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5/ww-config.js').default, name: 'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5' }),
'wwobject-e2962a22-03b3-4421-b85e-906177d2303f': getInheritedConfiguration({ ...require('@/components/elements/element-e2962a22-03b3-4421-b85e-906177d2303f/ww-config.js').default, name: 'wwobject-e2962a22-03b3-4421-b85e-906177d2303f' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});
