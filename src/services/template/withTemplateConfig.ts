import readYamlFile from "read-yaml-file/index";
import path from "path";

export interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  }
  personal?: {
    name?: string; 
    nickname?: string; 
    profession?: string; 
    country?: string; 
    avatar?: string; 
    socialNetworks?: {
      youtube?: string; 
      twitter?: string; 
      instagram?: string; 
      github?: string;
      linkedin?: string;
    }
  }
}

export async function withTemplateConfig(props = {}) {
  const PATH_TEMPLATE_CONFIG = path.resolve(".", "template-config.yml");
  const templateConfig = await readYamlFile<TemplateConfig>(PATH_TEMPLATE_CONFIG);

  return {
    templateConfig,
    ...props,
  };
}
