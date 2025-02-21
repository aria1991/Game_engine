// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdProject extends gdObjectsContainer {
  constructor(): void;
  setName(name: string): void;
  getName(): string;
  getCategories(): gdVectorString;
  setDescription(description: string): void;
  getDescription(): string;
  setVersion(authorName: string): void;
  getVersion(): string;
  setAuthor(authorName: string): void;
  getAuthor(): string;
  getAuthorIds(): gdVectorString;
  isPlayableWithKeyboard(): boolean;
  setPlayableWithKeyboard(playable: boolean): void;
  isPlayableWithGamepad(): boolean;
  setPlayableWithGamepad(playable: boolean): void;
  isPlayableWithMobile(): boolean;
  setPlayableWithMobile(playable: boolean): void;
  setPackageName(packageName: string): void;
  getPackageName(): string;
  setTemplateSlug(templateSlug: string): void;
  getTemplateSlug(): string;
  setOrientation(orientation: string): void;
  getOrientation(): string;
  setProjectUuid(projectUuid: string): void;
  getProjectUuid(): string;
  resetProjectUuid(): void;
  setProjectFile(file: string): void;
  getProjectFile(): string;
  setGameResolutionSize(width: number, height: number): void;
  getGameResolutionWidth(): number;
  getGameResolutionHeight(): number;
  getAdaptGameResolutionAtRuntime(): boolean;
  setAdaptGameResolutionAtRuntime(adaptGameResolutionAtRuntime: boolean): void;
  setScaleMode(scaleMode: string): void;
  getScaleMode(): string;
  setPixelsRounding(pixelsRounding: boolean): void;
  getPixelsRounding(): boolean;
  setSizeOnStartupMode(orientation: string): void;
  getSizeOnStartupMode(): string;
  getMaximumFPS(): number;
  setMaximumFPS(fps: number): void;
  getMinimumFPS(): number;
  setMinimumFPS(fps: number): void;
  setFolderProject(enable: boolean): void;
  isFolderProject(): boolean;
  setUseDeprecatedZeroAsDefaultZOrder(enable: boolean): void;
  getUseDeprecatedZeroAsDefaultZOrder(): boolean;
  setLastCompilationDirectory(path: string): void;
  getLastCompilationDirectory(): string;
  getExtensionProperties(): gdExtensionProperties;
  addPlatform(platform: gdPlatform): void;
  getCurrentPlatform(): gdPlatform;
  getPlatformSpecificAssets(): gdPlatformSpecificAssets;
  getLoadingScreen(): gdLoadingScreen;
  hasLayoutNamed(name: string): boolean;
  getLayout(name: string): gdLayout;
  getLayoutAt(index: number): gdLayout;
  swapLayouts(first: number, second: number): void;
  getLayoutsCount(): number;
  insertNewLayout(name: string, position: number): gdLayout;
  removeLayout(name: string): void;
  setFirstLayout(name: string): void;
  getFirstLayout(): string;
  hasExternalEventsNamed(name: string): boolean;
  getExternalEvents(name: string): gdExternalEvents;
  getExternalEventsAt(index: number): gdExternalEvents;
  swapExternalEvents(first: number, second: number): void;
  getExternalEventsCount(): number;
  insertNewExternalEvents(name: string, position: number): gdExternalEvents;
  removeExternalEvents(name: string): void;
  hasExternalLayoutNamed(name: string): boolean;
  getExternalLayout(name: string): gdExternalLayout;
  getExternalLayoutAt(index: number): gdExternalLayout;
  swapExternalLayouts(first: number, second: number): void;
  getExternalLayoutsCount(): number;
  insertNewExternalLayout(name: string, position: number): gdExternalLayout;
  removeExternalLayout(name: string): void;
  hasEventsFunctionsExtensionNamed(name: string): boolean;
  getEventsFunctionsExtension(name: string): gdEventsFunctionsExtension;
  getEventsFunctionsExtensionAt(index: number): gdEventsFunctionsExtension;
  swapEventsFunctionsExtensions(first: number, second: number): void;
  getEventsFunctionsExtensionsCount(): number;
  insertNewEventsFunctionsExtension(name: string, position: number): gdEventsFunctionsExtension;
  insertEventsFunctionsExtension(eventsFunctionsExtension: gdEventsFunctionsExtension, position: number): gdEventsFunctionsExtension;
  removeEventsFunctionsExtension(name: string): void;
  getVariables(): gdVariablesContainer;
  getResourcesManager(): gdResourcesManager;
  exposeResources(worker: gdArbitraryResourceWorker): void;
  static validateName(name: string): boolean;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(element: gdSerializerElement): void;
  getTypeOfBehavior(layout: gdLayout, name: string, searchInGroups: boolean): string;
  getTypeOfObject(layout: gdLayout, name: string, searchInGroups: boolean): string;
  getBehaviorsOfObject(layout: gdLayout, name: string, searchInGroups: boolean): gdVectorString;
  insertNewObject(project: gdProject, type: string, name: string, pos: number): gdObject;
  insertObject(obj: gdObject, pos: number): gdObject;
  hasObjectNamed(name: string): boolean;
  getObject(name: string): gdObject;
  getObjectAt(pos: number): gdObject;
  getObjectPosition(name: string): number;
  removeObject(name: string): void;
  swapObjects(first: number, second: number): void;
  moveObject(oldIndex: number, newIndex: number): void;
  moveObjectToAnotherContainer(name: string, newObjectsContainer: gdObjectsContainer, newPosition: number): void;
  getObjectsCount(): number;
  getObjectGroups(): gdObjectGroupsContainer;
  delete(): void;
  ptr: number;
};