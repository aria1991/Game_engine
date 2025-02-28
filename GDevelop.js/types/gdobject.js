// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdObject {
  constructor(name: string): void;
  clone(): gdUniquePtrObject;
  setName(name: string): void;
  getName(): string;
  setAssetStoreId(assetStoreId: string): void;
  getAssetStoreId(): string;
  setType(type: string): void;
  getType(): string;
  setTags(tags: string): void;
  getTags(): string;
  getProperties(): gdMapStringPropertyDescriptor;
  updateProperty(name: string, value: string): boolean;
  getInitialInstanceProperties(instance: gdInitialInstance, project: gdProject, scene: gdLayout): gdMapStringPropertyDescriptor;
  updateInitialInstanceProperty(instance: gdInitialInstance, name: string, value: string, project: gdProject, scene: gdLayout): boolean;
  exposeResources(worker: gdArbitraryResourceWorker): void;
  getVariables(): gdVariablesContainer;
  getEffects(): gdEffectsContainer;
  getAllBehaviorNames(): gdVectorString;
  hasBehaviorNamed(name: string): boolean;
  addNewBehavior(project: gdProject, type: string, name: string): gdBehaviorContent;
  getBehavior(name: string): gdBehaviorContent;
  removeBehavior(name: string): void;
  renameBehavior(oldName: string, name: string): boolean;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(project: gdProject, element: gdSerializerElement): void;
  delete(): void;
  ptr: number;
};