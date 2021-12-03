# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### Cache <a name="@pepperize/cdk-autoscaling-gitlab-runner.Cache" id="pepperizecdkautoscalinggitlabrunnercache"></a>

A GitLab Runner cache consisting of an Amazon S3 bucket.

The bucket is encrypted with a KMS managed master key, it has public access blocked and will be cleared and deleted on CFN stack deletion.

#### Initializers <a name="@pepperize/cdk-autoscaling-gitlab-runner.Cache.Initializer" id="pepperizecdkautoscalinggitlabrunnercacheinitializer"></a>

```typescript
import { Cache } from '@pepperize/cdk-autoscaling-gitlab-runner'

new Cache(scope: Stack, id: string, props?: CacheProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdkautoscalinggitlabrunnercacheparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack) | *No description.* |
| [`id`](#pepperizecdkautoscalinggitlabrunnercacheparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdkautoscalinggitlabrunnercacheparameterprops) | [`@pepperize/cdk-autoscaling-gitlab-runner.CacheProps`](#@pepperize/cdk-autoscaling-gitlab-runner.CacheProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Cache.parameter.scope" id="pepperizecdkautoscalinggitlabrunnercacheparameterscope"></a>

- *Type:* [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Cache.parameter.id" id="pepperizecdkautoscalinggitlabrunnercacheparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Cache.parameter.props" id="pepperizecdkautoscalinggitlabrunnercacheparameterprops"></a>

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.CacheProps`](#@pepperize/cdk-autoscaling-gitlab-runner.CacheProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucket`](#pepperizecdkautoscalinggitlabrunnercachepropertybucket)<span title="Required">*</span> | [`@aws-cdk/aws-s3.IBucket`](#@aws-cdk/aws-s3.IBucket) | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Cache.property.bucket" id="pepperizecdkautoscalinggitlabrunnercachepropertybucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* [`@aws-cdk/aws-s3.IBucket`](#@aws-cdk/aws-s3.IBucket)

---


### GitlabRunnerAutoscaling <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscaling"></a>

The Gitlab Runner autoscaling on EC2 by Docker Machine.

#### Initializers <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling.Initializer" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalinginitializer"></a>

```typescript
import { GitlabRunnerAutoscaling } from '@pepperize/cdk-autoscaling-gitlab-runner'

new GitlabRunnerAutoscaling(scope: Stack, id: string, props: GitlabRunnerAutoscalingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack) | *No description.* |
| [`id`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingparameterprops)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling.parameter.scope" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingparameterscope"></a>

- *Type:* [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling.parameter.id" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling.parameter.props" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingparameterprops"></a>

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cacheBucket`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropertycachebucket)<span title="Required">*</span> | [`@aws-cdk/aws-s3.IBucket`](#@aws-cdk/aws-s3.IBucket) | *No description.* |
| [`manager`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropertymanager)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager) | *No description.* |
| [`network`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropertynetwork)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.Network`](#@pepperize/cdk-autoscaling-gitlab-runner.Network) | *No description.* |
| [`runners`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropertyrunners)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners) | *No description.* |

---

##### `cacheBucket`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling.property.cacheBucket" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropertycachebucket"></a>

```typescript
public readonly cacheBucket: IBucket;
```

- *Type:* [`@aws-cdk/aws-s3.IBucket`](#@aws-cdk/aws-s3.IBucket)

---

##### `manager`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling.property.manager" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropertymanager"></a>

```typescript
public readonly manager: GitlabRunnerAutoscalingManager;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager)

---

##### `network`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling.property.network" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropertynetwork"></a>

```typescript
public readonly network: Network;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.Network`](#@pepperize/cdk-autoscaling-gitlab-runner.Network)

---

##### `runners`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscaling.property.runners" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropertyrunners"></a>

```typescript
public readonly runners: GitlabRunnerAutoscalingRunners;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners)

---


### Network <a name="@pepperize/cdk-autoscaling-gitlab-runner.Network" id="pepperizecdkautoscalinggitlabrunnernetwork"></a>

Network settings for the manager and runners.

All EC2 instances should belong to the same subnet, availability zone and vpc.

#### Initializers <a name="@pepperize/cdk-autoscaling-gitlab-runner.Network.Initializer" id="pepperizecdkautoscalinggitlabrunnernetworkinitializer"></a>

```typescript
import { Network } from '@pepperize/cdk-autoscaling-gitlab-runner'

new Network(scope: Stack, id: string, props?: NetworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#pepperizecdkautoscalinggitlabrunnernetworkparameterscope)<span title="Required">*</span> | [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack) | *No description.* |
| [`id`](#pepperizecdkautoscalinggitlabrunnernetworkparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#pepperizecdkautoscalinggitlabrunnernetworkparameterprops) | [`@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps`](#@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Network.parameter.scope" id="pepperizecdkautoscalinggitlabrunnernetworkparameterscope"></a>

- *Type:* [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack)

---

##### `id`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Network.parameter.id" id="pepperizecdkautoscalinggitlabrunnernetworkparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Network.parameter.props" id="pepperizecdkautoscalinggitlabrunnernetworkparameterprops"></a>

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps`](#@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`availabilityZone`](#pepperizecdkautoscalinggitlabrunnernetworkpropertyavailabilityzone)<span title="Required">*</span> | `string` | *No description.* |
| [`subnet`](#pepperizecdkautoscalinggitlabrunnernetworkpropertysubnet)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.ISubnet`](#@aws-cdk/aws-ec2.ISubnet) | *No description.* |
| [`vpc`](#pepperizecdkautoscalinggitlabrunnernetworkpropertyvpc)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc) | *No description.* |

---

##### `availabilityZone`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Network.property.availabilityZone" id="pepperizecdkautoscalinggitlabrunnernetworkpropertyavailabilityzone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* `string`

---

##### `subnet`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Network.property.subnet" id="pepperizecdkautoscalinggitlabrunnernetworkpropertysubnet"></a>

```typescript
public readonly subnet: ISubnet;
```

- *Type:* [`@aws-cdk/aws-ec2.ISubnet`](#@aws-cdk/aws-ec2.ISubnet)

---

##### `vpc`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.Network.property.vpc" id="pepperizecdkautoscalinggitlabrunnernetworkpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---


## Structs <a name="Structs" id="structs"></a>

### AutoscalingConfiguration <a name="@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration" id="pepperizecdkautoscalinggitlabrunnerautoscalingconfiguration"></a>

> https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersmachineautoscaling-sections

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AutoscalingConfiguration } from '@pepperize/cdk-autoscaling-gitlab-runner'

const autoscalingConfiguration: AutoscalingConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idleCount`](#pepperizecdkautoscalinggitlabrunnerautoscalingconfigurationpropertyidlecount) | `number` | *No description.* |
| [`idleTime`](#pepperizecdkautoscalinggitlabrunnerautoscalingconfigurationpropertyidletime) | `number` | *No description.* |
| [`periods`](#pepperizecdkautoscalinggitlabrunnerautoscalingconfigurationpropertyperiods) | `string`[] | The Periods setting contains an array of string patterns of time periods represented in a cron-style format. https://github.com/gorhill/cronexpr#implementation. |
| [`timezone`](#pepperizecdkautoscalinggitlabrunnerautoscalingconfigurationpropertytimezone) | `string` | *No description.* |

---

##### `idleCount`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration.property.idleCount" id="pepperizecdkautoscalinggitlabrunnerautoscalingconfigurationpropertyidlecount"></a>

```typescript
public readonly idleCount: number;
```

- *Type:* `number`

---

##### `idleTime`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration.property.idleTime" id="pepperizecdkautoscalinggitlabrunnerautoscalingconfigurationpropertyidletime"></a>

```typescript
public readonly idleTime: number;
```

- *Type:* `number`

---

##### `periods`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration.property.periods" id="pepperizecdkautoscalinggitlabrunnerautoscalingconfigurationpropertyperiods"></a>

```typescript
public readonly periods: string[];
```

- *Type:* `string`[]

The Periods setting contains an array of string patterns of time periods represented in a cron-style format. https://github.com/gorhill/cronexpr#implementation.

[second] [minute] [hour] [day of month] [month] [day of week] [year]

---

##### `timezone`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration.property.timezone" id="pepperizecdkautoscalinggitlabrunnerautoscalingconfigurationpropertytimezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* `string`

---

### CacheConfiguration <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheConfiguration" id="pepperizecdkautoscalinggitlabrunnercacheconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CacheConfiguration } from '@pepperize/cdk-autoscaling-gitlab-runner'

const cacheConfiguration: CacheConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`s3`](#pepperizecdkautoscalinggitlabrunnercacheconfigurationpropertys3) | [`@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration`](#@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration) | *No description.* |
| [`shared`](#pepperizecdkautoscalinggitlabrunnercacheconfigurationpropertyshared) | `boolean` | *No description.* |
| [`type`](#pepperizecdkautoscalinggitlabrunnercacheconfigurationpropertytype) | `string` | *No description.* |

---

##### `s3`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheConfiguration.property.s3" id="pepperizecdkautoscalinggitlabrunnercacheconfigurationpropertys3"></a>

```typescript
public readonly s3: CacheS3Configuration;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration`](#@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration)

---

##### `shared`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheConfiguration.property.shared" id="pepperizecdkautoscalinggitlabrunnercacheconfigurationpropertyshared"></a>

```typescript
public readonly shared: boolean;
```

- *Type:* `boolean`

---

##### `type`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheConfiguration.property.type" id="pepperizecdkautoscalinggitlabrunnercacheconfigurationpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

### CacheProps <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheProps" id="pepperizecdkautoscalinggitlabrunnercacheprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CacheProps } from '@pepperize/cdk-autoscaling-gitlab-runner'

const cacheProps: CacheProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucketName`](#pepperizecdkautoscalinggitlabrunnercachepropspropertybucketname) | `string` | The infix of the physical cache bucket name. |
| [`expiration`](#pepperizecdkautoscalinggitlabrunnercachepropspropertyexpiration) | [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration) | The number of days after which the created cache objects are deleted from S3. |

---

##### `bucketName`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheProps.property.bucketName" id="pepperizecdkautoscalinggitlabrunnercachepropspropertybucketname"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* `string`
- *Default:* "runner-cache"

The infix of the physical cache bucket name.

---

##### `expiration`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheProps.property.expiration" id="pepperizecdkautoscalinggitlabrunnercachepropspropertyexpiration"></a>

```typescript
public readonly expiration: Duration;
```

- *Type:* [`@aws-cdk/core.Duration`](#@aws-cdk/core.Duration)
- *Default:* 30 days

The number of days after which the created cache objects are deleted from S3.

---

### CacheS3Configuration <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration" id="pepperizecdkautoscalinggitlabrunnercaches3configuration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CacheS3Configuration } from '@pepperize/cdk-autoscaling-gitlab-runner'

const cacheS3Configuration: CacheS3Configuration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accessKey`](#pepperizecdkautoscalinggitlabrunnercaches3configurationpropertyaccesskey) | `string` | *No description.* |
| [`bucketLocation`](#pepperizecdkautoscalinggitlabrunnercaches3configurationpropertybucketlocation) | `string` | The name of the S3 region. |
| [`bucketName`](#pepperizecdkautoscalinggitlabrunnercaches3configurationpropertybucketname) | `string` | The name of the storage bucket where cache is stored. |
| [`secretKey`](#pepperizecdkautoscalinggitlabrunnercaches3configurationpropertysecretkey) | `string` | *No description.* |
| [`serverAddress`](#pepperizecdkautoscalinggitlabrunnercaches3configurationpropertyserveraddress) | `string` | The AWS S3 host. |

---

##### `accessKey`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration.property.accessKey" id="pepperizecdkautoscalinggitlabrunnercaches3configurationpropertyaccesskey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* `string`

---

##### `bucketLocation`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration.property.bucketLocation" id="pepperizecdkautoscalinggitlabrunnercaches3configurationpropertybucketlocation"></a>

```typescript
public readonly bucketLocation: string;
```

- *Type:* `string`

The name of the S3 region.

---

##### `bucketName`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration.property.bucketName" id="pepperizecdkautoscalinggitlabrunnercaches3configurationpropertybucketname"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* `string`
- *Default:* "runners-cache"

The name of the storage bucket where cache is stored.

---

##### `secretKey`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration.property.secretKey" id="pepperizecdkautoscalinggitlabrunnercaches3configurationpropertysecretkey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* `string`

---

##### `serverAddress`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.CacheS3Configuration.property.serverAddress" id="pepperizecdkautoscalinggitlabrunnercaches3configurationpropertyserveraddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* `string`
- *Default:* "s3.amazonaws.com"

The AWS S3 host.

---

### ConfigurationMapperProps <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ConfigurationMapperProps } from '@pepperize/cdk-autoscaling-gitlab-runner'

const configurationMapperProps: ConfigurationMapperProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`autoscalingConfigurations`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertyautoscalingconfigurations)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration)[] | *No description.* |
| [`cacheConfiguration`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertycacheconfiguration)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.CacheConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.CacheConfiguration) | *No description.* |
| [`dockerConfiguration`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertydockerconfiguration)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration) | *No description.* |
| [`globalConfiguration`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertyglobalconfiguration)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration) | *No description.* |
| [`machineConfiguration`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertymachineconfiguration)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration) | *No description.* |
| [`runnerConfiguration`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertyrunnerconfiguration)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration) | *No description.* |

---

##### `autoscalingConfigurations`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps.property.autoscalingConfigurations" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertyautoscalingconfigurations"></a>

```typescript
public readonly autoscalingConfigurations: AutoscalingConfiguration[];
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration)[]

---

##### `cacheConfiguration`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps.property.cacheConfiguration" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertycacheconfiguration"></a>

```typescript
public readonly cacheConfiguration: CacheConfiguration;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.CacheConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.CacheConfiguration)

---

##### `dockerConfiguration`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps.property.dockerConfiguration" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertydockerconfiguration"></a>

```typescript
public readonly dockerConfiguration: DockerConfiguration;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration)

---

##### `globalConfiguration`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps.property.globalConfiguration" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertyglobalconfiguration"></a>

```typescript
public readonly globalConfiguration: GlobalConfiguration;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration)

---

##### `machineConfiguration`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps.property.machineConfiguration" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertymachineconfiguration"></a>

```typescript
public readonly machineConfiguration: MachineConfiguration;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration)

---

##### `runnerConfiguration`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps.property.runnerConfiguration" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropspropertyrunnerconfiguration"></a>

```typescript
public readonly runnerConfiguration: RunnerConfiguration;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration)

---

### DockerConfiguration <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration" id="pepperizecdkautoscalinggitlabrunnerdockerconfiguration"></a>

Configure docker on the runners.

> https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersdocker-section

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DockerConfiguration } from '@pepperize/cdk-autoscaling-gitlab-runner'

const dockerConfiguration: DockerConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`allowedImages`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyallowedimages) | `string`[] | Wildcard list of images that can be specified in the .gitlab-ci.yml file. If not present, all images are allowed (equivalent to ["*\/*:*"]). See Restrict Docker images and services. |
| [`allowedServices`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyallowedservices) | `string`[] | Wildcard list of services that can be specified in the .gitlab-ci.yml file. If not present, all images are allowed (equivalent to [*\/*:*]). See Restrict Docker images and services. |
| [`cacheDir`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycachedir) | `string` | Directory where Docker caches should be stored. |
| [`capAdd`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycapadd) | `string`[] | Add additional Linux capabilities to the container. |
| [`capDrop`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycapdrop) | `string`[] | Drop additional Linux capabilities from the container. |
| [`cpus`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycpus) | `string` | Number of CPUs (available in Docker 1.13 or later. A string. |
| [`cpusetCpus`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycpusetcpus) | `string` | The control group’s CpusetCpus. |
| [`cpuShares`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycpushares) | `number` | Number of CPU shares used to set relative CPU usage. |
| [`devices`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydevices) | `string`[] | Share additional host devices with the container. |
| [`disableCache`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydisablecache) | `boolean` | The Docker executor has two levels of caching: a global one (like any other executor) and a local cache based on Docker volumes. |
| [`disableEntrypointOverwrite`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydisableentrypointoverwrite) | `boolean` | Disable the image entrypoint overwriting. |
| [`dns`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydns) | `string`[] | A list of DNS servers for the container to use. |
| [`dnsSearch`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydnssearch) | `string`[] | A list of DNS search domains. |
| [`extraHosts`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyextrahosts) | `string`[] | Hosts that should be defined in container environment. |
| [`gpus`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertygpus) | `string`[] | GPU devices for Docker container. |
| [`helperImage`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyhelperimage) | `string` | (Advanced) The default helper image used to clone repositories and upload artifacts. |
| [`helperImageFlavor`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyhelperimageflavor) | `string` | Sets the helper image flavor (alpine, alpine3.12, alpine3.13, alpine3.14 or ubuntu). Defaults to alpine. The alpine flavor uses the same version as alpine3.12. |
| [`host`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyhost) | `string` | Custom Docker endpoint. |
| [`hostname`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyhostname) | `string` | Custom hostname for the Docker container. |
| [`image`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyimage) | `string` | The image to run jobs with. |
| [`links`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertylinks) | `string`[] | Containers that should be linked with container that runs the job. |
| [`memory`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertymemory) | `string` | The memory limit. |
| [`memoryReservation`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertymemoryreservation) | `string` | The memory soft limit. |
| [`memorySwap`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertymemoryswap) | `string` | The total memory limit. |
| [`networkMode`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertynetworkmode) | `string` | Add container to a custom network. |
| [`oomKillDisable`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyoomkilldisable) | `boolean` | If an out-of-memory (OOM) error occurs, do not kill processes in a container. |
| [`oomScoreAdjust`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyoomscoreadjust) | `string` | OOM score adjustment. |
| [`privileged`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyprivileged) | `boolean` | Make the container run in privileged mode. |
| [`pullPolicy`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertypullpolicy) | `string` | The image pull policy: never, if-not-present or always (default). |
| [`runtime`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyruntime) | `string` | The runtime for the Docker container. |
| [`securityOpt`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertysecurityopt) | `string` | Security options (–security-opt in docker run). |
| [`shmSize`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyshmsize) | `number` | Shared memory size for images (in bytes). |
| [`sysctls`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertysysctls) | `string` | The sysctl options. |
| [`tlsCertPath`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertytlscertpath) | `string` | A directory where ca.pem, cert.pem or key.pem are stored and used to make a secure TLS connection to Docker. Useful in boot2docker. |
| [`tlsVerify`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertytlsverify) | `boolean` | Enable or disable TLS verification of connections to Docker daemon. |
| [`usernsMode`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyusernsmode) | `string` | The user namespace mode for the container and Docker services when user namespace remapping option is enabled. |
| [`volumeDriver`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyvolumedriver) | `string` | The volume driver to use for the container. |
| [`volumes`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyvolumes) | `string`[] | Additional volumes that should be mounted. |
| [`volumesFrom`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyvolumesfrom) | `string`[] | A list of volumes to inherit from another container in the form <container name>[:<ro\|rw>]. |
| [`waitForServicesTimeout`](#pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertywaitforservicestimeout) | `number` | How long to wait for Docker services. |

---

##### `allowedImages`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.allowedImages" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyallowedimages"></a>

```typescript
public readonly allowedImages: string[];
```

- *Type:* `string`[]

Wildcard list of images that can be specified in the .gitlab-ci.yml file. If not present, all images are allowed (equivalent to ["*\/*:*"]). See Restrict Docker images and services.

---

##### `allowedServices`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.allowedServices" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyallowedservices"></a>

```typescript
public readonly allowedServices: string[];
```

- *Type:* `string`[]

Wildcard list of services that can be specified in the .gitlab-ci.yml file. If not present, all images are allowed (equivalent to [*\/*:*]). See Restrict Docker images and services.

---

##### `cacheDir`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.cacheDir" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycachedir"></a>

```typescript
public readonly cacheDir: string;
```

- *Type:* `string`

Directory where Docker caches should be stored.

This path can be absolute or relative to current working directory. See disable_cache for more information.

---

##### `capAdd`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.capAdd" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycapadd"></a>

```typescript
public readonly capAdd: string[];
```

- *Type:* `string`[]
- *Default:* ["CAP_SYS_ADMIN"]

Add additional Linux capabilities to the container.

---

##### `capDrop`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.capDrop" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycapdrop"></a>

```typescript
public readonly capDrop: string[];
```

- *Type:* `string`[]

Drop additional Linux capabilities from the container.

---

##### `cpus`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.cpus" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycpus"></a>

```typescript
public readonly cpus: string;
```

- *Type:* `string`

Number of CPUs (available in Docker 1.13 or later. A string.

---

##### `cpusetCpus`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.cpusetCpus" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycpusetcpus"></a>

```typescript
public readonly cpusetCpus: string;
```

- *Type:* `string`

The control group’s CpusetCpus.

A string.

---

##### `cpuShares`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.cpuShares" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertycpushares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* `number`

Number of CPU shares used to set relative CPU usage.

Default is 1024.

---

##### `devices`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.devices" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydevices"></a>

```typescript
public readonly devices: string[];
```

- *Type:* `string`[]

Share additional host devices with the container.

---

##### `disableCache`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.disableCache" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydisablecache"></a>

```typescript
public readonly disableCache: boolean;
```

- *Type:* `boolean`
- *Default:* false

The Docker executor has two levels of caching: a global one (like any other executor) and a local cache based on Docker volumes.

This configuration flag acts only on the local one which disables the use of automatically created (not mapped to a host directory) cache volumes. In other words, it only prevents creating a container that holds temporary files of builds, it does not disable the cache if the runner is configured in distributed cache mode.

---

##### `disableEntrypointOverwrite`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.disableEntrypointOverwrite" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydisableentrypointoverwrite"></a>

```typescript
public readonly disableEntrypointOverwrite: boolean;
```

- *Type:* `boolean`

Disable the image entrypoint overwriting.

---

##### `dns`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.dns" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* `string`[]

A list of DNS servers for the container to use.

---

##### `dnsSearch`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.dnsSearch" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertydnssearch"></a>

```typescript
public readonly dnsSearch: string[];
```

- *Type:* `string`[]

A list of DNS search domains.

---

##### `extraHosts`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.extraHosts" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyextrahosts"></a>

```typescript
public readonly extraHosts: string[];
```

- *Type:* `string`[]

Hosts that should be defined in container environment.

---

##### `gpus`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.gpus" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertygpus"></a>

```typescript
public readonly gpus: string[];
```

- *Type:* `string`[]

GPU devices for Docker container.

Uses the same format as the docker cli. View details in the Docker documentation.

---

##### `helperImage`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.helperImage" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyhelperimage"></a>

```typescript
public readonly helperImage: string;
```

- *Type:* `string`

(Advanced) The default helper image used to clone repositories and upload artifacts.

---

##### `helperImageFlavor`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.helperImageFlavor" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyhelperimageflavor"></a>

```typescript
public readonly helperImageFlavor: string;
```

- *Type:* `string`

Sets the helper image flavor (alpine, alpine3.12, alpine3.13, alpine3.14 or ubuntu). Defaults to alpine. The alpine flavor uses the same version as alpine3.12.

---

##### `host`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.host" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyhost"></a>

```typescript
public readonly host: string;
```

- *Type:* `string`

Custom Docker endpoint.

Default is DOCKER_HOST environment or unix:///var/run/docker.sock.

---

##### `hostname`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.hostname" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyhostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* `string`

Custom hostname for the Docker container.

---

##### `image`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.image" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyimage"></a>

```typescript
public readonly image: string;
```

- *Type:* `string`

The image to run jobs with.

---

##### `links`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.links" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertylinks"></a>

```typescript
public readonly links: string[];
```

- *Type:* `string`[]

Containers that should be linked with container that runs the job.

---

##### `memory`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.memory" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertymemory"></a>

```typescript
public readonly memory: string;
```

- *Type:* `string`

The memory limit.

A string.

---

##### `memoryReservation`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.memoryReservation" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertymemoryreservation"></a>

```typescript
public readonly memoryReservation: string;
```

- *Type:* `string`

The memory soft limit.

A string.

---

##### `memorySwap`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.memorySwap" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertymemoryswap"></a>

```typescript
public readonly memorySwap: string;
```

- *Type:* `string`

The total memory limit.

A string.

---

##### `networkMode`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.networkMode" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertynetworkmode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* `string`

Add container to a custom network.

---

##### `oomKillDisable`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.oomKillDisable" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyoomkilldisable"></a>

```typescript
public readonly oomKillDisable: boolean;
```

- *Type:* `boolean`

If an out-of-memory (OOM) error occurs, do not kill processes in a container.

---

##### `oomScoreAdjust`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.oomScoreAdjust" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyoomscoreadjust"></a>

```typescript
public readonly oomScoreAdjust: string;
```

- *Type:* `string`

OOM score adjustment.

Positive means kill earlier.

---

##### `privileged`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.privileged" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyprivileged"></a>

```typescript
public readonly privileged: boolean;
```

- *Type:* `boolean`
- *Default:* true

Make the container run in privileged mode.

Insecure.

---

##### `pullPolicy`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.pullPolicy" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertypullpolicy"></a>

```typescript
public readonly pullPolicy: string;
```

- *Type:* `string`

The image pull policy: never, if-not-present or always (default).

View details in the pull policies documentation. You can also add multiple pull policies.

---

##### `runtime`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.runtime" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyruntime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* `string`

The runtime for the Docker container.

---

##### `securityOpt`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.securityOpt" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertysecurityopt"></a>

```typescript
public readonly securityOpt: string;
```

- *Type:* `string`

Security options (–security-opt in docker run).

Takes a list of : separated key/values.

---

##### `shmSize`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.shmSize" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyshmsize"></a>

```typescript
public readonly shmSize: number;
```

- *Type:* `number`
- *Default:* 0

Shared memory size for images (in bytes).

---

##### `sysctls`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.sysctls" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertysysctls"></a>

```typescript
public readonly sysctls: string;
```

- *Type:* `string`

The sysctl options.

---

##### `tlsCertPath`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.tlsCertPath" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertytlscertpath"></a>

```typescript
public readonly tlsCertPath: string;
```

- *Type:* `string`

A directory where ca.pem, cert.pem or key.pem are stored and used to make a secure TLS connection to Docker. Useful in boot2docker.

---

##### `tlsVerify`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.tlsVerify" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertytlsverify"></a>

```typescript
public readonly tlsVerify: boolean;
```

- *Type:* `boolean`
- *Default:* false

Enable or disable TLS verification of connections to Docker daemon.

Disabled by default.

---

##### `usernsMode`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.usernsMode" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyusernsmode"></a>

```typescript
public readonly usernsMode: string;
```

- *Type:* `string`

The user namespace mode for the container and Docker services when user namespace remapping option is enabled.

Available in Docker 1.10 or later.

---

##### `volumeDriver`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.volumeDriver" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyvolumedriver"></a>

```typescript
public readonly volumeDriver: string;
```

- *Type:* `string`

The volume driver to use for the container.

---

##### `volumes`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.volumes" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyvolumes"></a>

```typescript
public readonly volumes: string[];
```

- *Type:* `string`[]

Additional volumes that should be mounted.

Same syntax as the Docker -v flag.

---

##### `volumesFrom`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.volumesFrom" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertyvolumesfrom"></a>

```typescript
public readonly volumesFrom: string[];
```

- *Type:* `string`[]

A list of volumes to inherit from another container in the form <container name>[:<ro|rw>].

Access level defaults to read-write, but can be manually set to ro (read-only) or rw (read-write).

---

##### `waitForServicesTimeout`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration.property.waitForServicesTimeout" id="pepperizecdkautoscalinggitlabrunnerdockerconfigurationpropertywaitforservicestimeout"></a>

```typescript
public readonly waitForServicesTimeout: number;
```

- *Type:* `number`
- *Default:* 300

How long to wait for Docker services.

Set to 0 to disable. Default is 30.

---

### GitlabRunnerAutoscalingCacheProps <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingCacheProps" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingcacheprops"></a>

The distributed GitLab runner S3 cache.

Either pass an existing bucket or override default options.

> https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscaches3-section

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { GitlabRunnerAutoscalingCacheProps } from '@pepperize/cdk-autoscaling-gitlab-runner'

const gitlabRunnerAutoscalingCacheProps: GitlabRunnerAutoscalingCacheProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucket`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingcachepropspropertybucket) | [`@aws-cdk/aws-s3.IBucket`](#@aws-cdk/aws-s3.IBucket) | An existing S3 bucket used as runner's cache. |
| [`options`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingcachepropspropertyoptions) | [`@pepperize/cdk-autoscaling-gitlab-runner.CacheProps`](#@pepperize/cdk-autoscaling-gitlab-runner.CacheProps) | If no existing S3 bucket is provided, a S3 bucket will be created. |

---

##### `bucket`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingCacheProps.property.bucket" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingcachepropspropertybucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* [`@aws-cdk/aws-s3.IBucket`](#@aws-cdk/aws-s3.IBucket)

An existing S3 bucket used as runner's cache.

---

##### `options`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingCacheProps.property.options" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingcachepropspropertyoptions"></a>

```typescript
public readonly options: CacheProps;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.CacheProps`](#@pepperize/cdk-autoscaling-gitlab-runner.CacheProps)

If no existing S3 bucket is provided, a S3 bucket will be created.

---

### GitlabRunnerAutoscalingManager <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanager"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { GitlabRunnerAutoscalingManager } from '@pepperize/cdk-autoscaling-gitlab-runner'

const gitlabRunnerAutoscalingManager: GitlabRunnerAutoscalingManager = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`autoScalingGroup`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertyautoscalinggroup)<span title="Required">*</span> | [`@aws-cdk/aws-autoscaling.IAutoScalingGroup`](#@aws-cdk/aws-autoscaling.IAutoScalingGroup) | *No description.* |
| [`instanceType`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertyinstancetype)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType) | *No description.* |
| [`machineImage`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertymachineimage)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage) | *No description.* |
| [`role`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertyrole)<span title="Required">*</span> | [`@aws-cdk/aws-iam.IRole`](#@aws-cdk/aws-iam.IRole) | *No description.* |
| [`securityGroup`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertysecuritygroup)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.ISecurityGroup`](#@aws-cdk/aws-ec2.ISecurityGroup) | *No description.* |

---

##### `autoScalingGroup`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager.property.autoScalingGroup" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertyautoscalinggroup"></a>

```typescript
public readonly autoScalingGroup: IAutoScalingGroup;
```

- *Type:* [`@aws-cdk/aws-autoscaling.IAutoScalingGroup`](#@aws-cdk/aws-autoscaling.IAutoScalingGroup)

---

##### `instanceType`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager.property.instanceType" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType)

---

##### `machineImage`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager.property.machineImage" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertymachineimage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage)

---

##### `role`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager.property.role" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertyrole"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`@aws-cdk/aws-iam.IRole`](#@aws-cdk/aws-iam.IRole)

---

##### `securityGroup`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManager.property.securityGroup" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`@aws-cdk/aws-ec2.ISecurityGroup`](#@aws-cdk/aws-ec2.ISecurityGroup)

---

### GitlabRunnerAutoscalingManagerProps <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManagerProps" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { GitlabRunnerAutoscalingManagerProps } from '@pepperize/cdk-autoscaling-gitlab-runner'

const gitlabRunnerAutoscalingManagerProps: GitlabRunnerAutoscalingManagerProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`instanceType`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropspropertyinstancetype) | [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType) | Instance type for manager EC2 instance. |
| [`keyPairName`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropspropertykeypairname) | `string` | A set of security credentials that you use to prove your identity when connecting to an Amazon EC2 instance. |
| [`machineImage`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropspropertymachineimage) | [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage) | An Amazon Machine Image ID for the Manager EC2 instance. |

---

##### `instanceType`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManagerProps.property.instanceType" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropspropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType)
- *Default:* InstanceType.of(InstanceClass.T3, InstanceSize.NANO)

Instance type for manager EC2 instance.

It's a combination of a class and size.

---

##### `keyPairName`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManagerProps.property.keyPairName" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropspropertykeypairname"></a>

```typescript
public readonly keyPairName: string;
```

- *Type:* `string`

A set of security credentials that you use to prove your identity when connecting to an Amazon EC2 instance.

You won't be able to ssh into an instance without the Key Pair.

---

##### `machineImage`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManagerProps.property.machineImage" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingmanagerpropspropertymachineimage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage)

An Amazon Machine Image ID for the Manager EC2 instance.

If empty the latest Amazon 2 Image will be looked up.  Should be RHEL flavor like Amazon Linux 2 with yum available for instance initialization.

> https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-init.html

---

### GitlabRunnerAutoscalingProps <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingprops"></a>

Properties of the Gitlab Runner.

You have to provide at least the GitLab's Runner's authentication token.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { GitlabRunnerAutoscalingProps } from '@pepperize/cdk-autoscaling-gitlab-runner'

const gitlabRunnerAutoscalingProps: GitlabRunnerAutoscalingProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`checkInterval`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertycheckinterval) | `number` | The check_interval option defines how often the runner should check GitLab for new jobs\| in seconds. |
| [`concurrent`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertyconcurrent) | `number` | The limit of the jobs that can be run concurrently across all runners (concurrent). |
| [`logFormat`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertylogformat) | `string` | The log format. |
| [`logLevel`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertyloglevel) | `string` | The log_level. |
| [`gitlabToken`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertygitlabtoken)<span title="Required">*</span> | `string` | The GitLab Runner’s authentication token, which is obtained during runner registration. |
| [`cache`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertycache) | [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingCacheProps`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingCacheProps) | *No description.* |
| [`gitlabUrl`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertygitlaburl) | `string` | GitLab instance URL. |
| [`manager`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertymanager) | [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManagerProps`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManagerProps) | The manager EC2 instance configuration. |
| [`network`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertynetwork) | [`@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps`](#@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps) | The network configuration for the Runner. |
| [`runners`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertyrunners) | [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps) | *No description.* |

---

##### `checkInterval`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.checkInterval" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertycheckinterval"></a>

```typescript
public readonly checkInterval: number;
```

- *Type:* `number`
- *Default:* 0

The check_interval option defines how often the runner should check GitLab for new jobs| in seconds.

---

##### `concurrent`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.concurrent" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertyconcurrent"></a>

```typescript
public readonly concurrent: number;
```

- *Type:* `number`
- *Default:* 10

The limit of the jobs that can be run concurrently across all runners (concurrent).

---

##### `logFormat`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.logFormat" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertylogformat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* `string`
- *Default:* "runner"

The log format.

---

##### `logLevel`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.logLevel" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertyloglevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* `string`
- *Default:* "info"

The log_level.

---

##### `gitlabToken`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabToken" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertygitlabtoken"></a>

```typescript
public readonly gitlabToken: string;
```

- *Type:* `string`

The GitLab Runner’s authentication token, which is obtained during runner registration.

> https://docs.gitlab.com/ee/api/runners.html#registration-and-authentication-tokens

---

##### `cache`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.cache" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertycache"></a>

```typescript
public readonly cache: GitlabRunnerAutoscalingCacheProps;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingCacheProps`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingCacheProps)

---

##### `gitlabUrl`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.gitlabUrl" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertygitlaburl"></a>

```typescript
public readonly gitlabUrl: string;
```

- *Type:* `string`
- *Default:* "https://gitlab.com"

GitLab instance URL.

---

##### `manager`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.manager" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertymanager"></a>

```typescript
public readonly manager: GitlabRunnerAutoscalingManagerProps;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManagerProps`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingManagerProps)

The manager EC2 instance configuration.

If not set, the defaults will be used.

> [GitlabRunnerAutoscalingManagerProps](GitlabRunnerAutoscalingManagerProps)

---

##### `network`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.network" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertynetwork"></a>

```typescript
public readonly network: NetworkProps;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps`](#@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps)

The network configuration for the Runner.

If not set, the defaults will be used.

> [NetworkProps](NetworkProps)

---

##### `runners`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingProps.property.runners" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingpropspropertyrunners"></a>

```typescript
public readonly runners: GitlabRunnerAutoscalingRunnerProps;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps`](#@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps)

---

### GitlabRunnerAutoscalingRunnerProps <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerprops"></a>

The runner EC2 instances configuration.

If not set, the defaults will be used.

> [GitlabRunnerAutoscalingProps](GitlabRunnerAutoscalingProps)

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { GitlabRunnerAutoscalingRunnerProps } from '@pepperize/cdk-autoscaling-gitlab-runner'

const gitlabRunnerAutoscalingRunnerProps: GitlabRunnerAutoscalingRunnerProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`autoscaling`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyautoscaling) | [`@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration)[] | Optional autoscaling configuration. |
| [`docker`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertydocker) | [`@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration) | Optional docker configuration. |
| [`environment`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyenvironment) | `string`[] | Append or overwrite environment variables. |
| [`instanceType`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyinstancetype) | [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType) | Instance type for runner EC2 instances. |
| [`limit`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertylimit) | `number` | Limit how many jobs can be handled concurrently by this registered runner. |
| [`machine`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertymachine) | [`@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration) | Optional docker machine configuration. |
| [`machineImage`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertymachineimage) | [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage) | An Amazon Machine Image ID for the Runners EC2 instances. |
| [`outputLimit`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyoutputlimit) | `number` | Maximum build log size in kilobytes. |
| [`role`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyrole) | [`@aws-cdk/aws-iam.IRole`](#@aws-cdk/aws-iam.IRole) | Optionally pass an IAM role, that get's assigned to the EC2 runner instances. |

---

##### `autoscaling`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.autoscaling" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyautoscaling"></a>

```typescript
public readonly autoscaling: AutoscalingConfiguration[];
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.AutoscalingConfiguration)[]

Optional autoscaling configuration.

---

##### `docker`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.docker" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertydocker"></a>

```typescript
public readonly docker: DockerConfiguration;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.DockerConfiguration)

Optional docker configuration.

---

##### `environment`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.environment" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyenvironment"></a>

```typescript
public readonly environment: string[];
```

- *Type:* `string`[]
- *Default:* ["DOCKER_DRIVER=overlay2", "DOCKER_TLS_CERTDIR=/certs"]

Append or overwrite environment variables.

---

##### `instanceType`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.instanceType" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType)
- *Default:* InstanceType.of(InstanceClass.T3, InstanceSize.MICRO)

Instance type for runner EC2 instances.

It's a combination of a class and size.

---

##### `limit`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.limit" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertylimit"></a>

```typescript
public readonly limit: number;
```

- *Type:* `number`
- *Default:* 10

Limit how many jobs can be handled concurrently by this registered runner.

0 (default) means do not limit.

---

##### `machine`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.machine" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertymachine"></a>

```typescript
public readonly machine: MachineConfiguration;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration`](#@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration)

Optional docker machine configuration.

---

##### `machineImage`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.machineImage" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertymachineimage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage)

An Amazon Machine Image ID for the Runners EC2 instances.

If empty the latest Ubuntu 20.04 focal will be looked up.  Any operating system supported by Dcoker Machine's provisioner.

> https://gitlab.com/gitlab-org/ci-cd/docker-machine/-/tree/main/libmachine/provision

---

##### `outputLimit`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.outputLimit" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyoutputlimit"></a>

```typescript
public readonly outputLimit: number;
```

- *Type:* `number`
- *Default:* 52428800 (50GB)

Maximum build log size in kilobytes.

Default is 4096 (4MB).

---

##### `role`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunnerProps.property.role" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerpropspropertyrole"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`@aws-cdk/aws-iam.IRole`](#@aws-cdk/aws-iam.IRole)

Optionally pass an IAM role, that get's assigned to the EC2 runner instances.

---

### GitlabRunnerAutoscalingRunners <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunners"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { GitlabRunnerAutoscalingRunners } from '@pepperize/cdk-autoscaling-gitlab-runner'

const gitlabRunnerAutoscalingRunners: GitlabRunnerAutoscalingRunners = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`instanceProfile`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertyinstanceprofile)<span title="Required">*</span> | [`@aws-cdk/aws-iam.CfnInstanceProfile`](#@aws-cdk/aws-iam.CfnInstanceProfile) | *No description.* |
| [`instanceType`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertyinstancetype)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType) | *No description.* |
| [`machineImage`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertymachineimage)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage) | *No description.* |
| [`role`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertyrole)<span title="Required">*</span> | [`@aws-cdk/aws-iam.IRole`](#@aws-cdk/aws-iam.IRole) | *No description.* |
| [`securityGroup`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertysecuritygroup)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.ISecurityGroup`](#@aws-cdk/aws-ec2.ISecurityGroup) | *No description.* |
| [`securityGroupName`](#pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertysecuritygroupname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `instanceProfile`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners.property.instanceProfile" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertyinstanceprofile"></a>

```typescript
public readonly instanceProfile: CfnInstanceProfile;
```

- *Type:* [`@aws-cdk/aws-iam.CfnInstanceProfile`](#@aws-cdk/aws-iam.CfnInstanceProfile)

---

##### `instanceType`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners.property.instanceType" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`@aws-cdk/aws-ec2.InstanceType`](#@aws-cdk/aws-ec2.InstanceType)

---

##### `machineImage`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners.property.machineImage" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertymachineimage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* [`@aws-cdk/aws-ec2.IMachineImage`](#@aws-cdk/aws-ec2.IMachineImage)

---

##### `role`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners.property.role" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertyrole"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`@aws-cdk/aws-iam.IRole`](#@aws-cdk/aws-iam.IRole)

---

##### `securityGroup`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners.property.securityGroup" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* [`@aws-cdk/aws-ec2.ISecurityGroup`](#@aws-cdk/aws-ec2.ISecurityGroup)

---

##### `securityGroupName`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GitlabRunnerAutoscalingRunners.property.securityGroupName" id="pepperizecdkautoscalinggitlabrunnergitlabrunnerautoscalingrunnerspropertysecuritygroupname"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* `string`

---

### GlobalConfiguration <a name="@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration" id="pepperizecdkautoscalinggitlabrunnerglobalconfiguration"></a>

You can change the behavior of GitLab Runner and of individual registered runners.

This imitates the structure of Gitlab Runner advanced configuration that originally is set with config.toml file.

> https://docs.gitlab.com/runner/configuration/advanced-configuration.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { GlobalConfiguration } from '@pepperize/cdk-autoscaling-gitlab-runner'

const globalConfiguration: GlobalConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`checkInterval`](#pepperizecdkautoscalinggitlabrunnerglobalconfigurationpropertycheckinterval) | `number` | The check_interval option defines how often the runner should check GitLab for new jobs\| in seconds. |
| [`concurrent`](#pepperizecdkautoscalinggitlabrunnerglobalconfigurationpropertyconcurrent) | `number` | The limit of the jobs that can be run concurrently across all runners (concurrent). |
| [`logFormat`](#pepperizecdkautoscalinggitlabrunnerglobalconfigurationpropertylogformat) | `string` | The log format. |
| [`logLevel`](#pepperizecdkautoscalinggitlabrunnerglobalconfigurationpropertyloglevel) | `string` | The log_level. |

---

##### `checkInterval`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration.property.checkInterval" id="pepperizecdkautoscalinggitlabrunnerglobalconfigurationpropertycheckinterval"></a>

```typescript
public readonly checkInterval: number;
```

- *Type:* `number`
- *Default:* 0

The check_interval option defines how often the runner should check GitLab for new jobs| in seconds.

---

##### `concurrent`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration.property.concurrent" id="pepperizecdkautoscalinggitlabrunnerglobalconfigurationpropertyconcurrent"></a>

```typescript
public readonly concurrent: number;
```

- *Type:* `number`
- *Default:* 10

The limit of the jobs that can be run concurrently across all runners (concurrent).

---

##### `logFormat`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration.property.logFormat" id="pepperizecdkautoscalinggitlabrunnerglobalconfigurationpropertylogformat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* `string`
- *Default:* "runner"

The log format.

---

##### `logLevel`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.GlobalConfiguration.property.logLevel" id="pepperizecdkautoscalinggitlabrunnerglobalconfigurationpropertyloglevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* `string`
- *Default:* "info"

The log_level.

---

### MachineConfiguration <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration" id="pepperizecdkautoscalinggitlabrunnermachineconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MachineConfiguration } from '@pepperize/cdk-autoscaling-gitlab-runner'

const machineConfiguration: MachineConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idleCount`](#pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertyidlecount) | `number` | Number of machines that need to be created and waiting in Idle state. |
| [`idleTime`](#pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertyidletime) | `number` | Time (in seconds) for machine to be in Idle state before it is removed. |
| [`machineDriver`](#pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertymachinedriver) | `string` | Docker Machine driver. |
| [`machineName`](#pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertymachinename) | `string` | *No description.* |
| [`machineOptions`](#pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertymachineoptions) | [`@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions`](#@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions) | Docker Machine options passed to the Docker Machine driver. |
| [`maxBuilds`](#pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertymaxbuilds) | `number` | Maximum job (build) count before machine is removed. |

---

##### `idleCount`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration.property.idleCount" id="pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertyidlecount"></a>

```typescript
public readonly idleCount: number;
```

- *Type:* `number`
- *Default:* 0

Number of machines that need to be created and waiting in Idle state.

---

##### `idleTime`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration.property.idleTime" id="pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertyidletime"></a>

```typescript
public readonly idleTime: number;
```

- *Type:* `number`
- *Default:* 300

Time (in seconds) for machine to be in Idle state before it is removed.

---

##### `machineDriver`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration.property.machineDriver" id="pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertymachinedriver"></a>

```typescript
public readonly machineDriver: string;
```

- *Type:* `string`
- *Default:* "amazonec2"

Docker Machine driver.

---

##### `machineName`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration.property.machineName" id="pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertymachinename"></a>

```typescript
public readonly machineName: string;
```

- *Type:* `string`
- *Default:* "gitlab-runner"

---

##### `machineOptions`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration.property.machineOptions" id="pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertymachineoptions"></a>

```typescript
public readonly machineOptions: MachineOptions;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions`](#@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions)

Docker Machine options passed to the Docker Machine driver.

---

##### `maxBuilds`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineConfiguration.property.maxBuilds" id="pepperizecdkautoscalinggitlabrunnermachineconfigurationpropertymaxbuilds"></a>

```typescript
public readonly maxBuilds: number;
```

- *Type:* `number`
- *Default:* 20

Maximum job (build) count before machine is removed.

---

### MachineOptions <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions" id="pepperizecdkautoscalinggitlabrunnermachineoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MachineOptions } from '@pepperize/cdk-autoscaling-gitlab-runner'

const machineOptions: MachineOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ami`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyami) | `string` | *No description.* |
| [`blockDurationMinutes`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyblockdurationminutes) | `number` | The amazonec2-block-duration-minutes parameter. |
| [`iamInstanceProfile`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyiaminstanceprofile) | `string` | *No description.* |
| [`instanceType`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyinstancetype) | `string` | *No description.* |
| [`region`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyregion) | `string` | *No description.* |
| [`requestSpotInstance`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyrequestspotinstance) | `boolean` | The amazonec2-request-spot-instance parameter. |
| [`securityGroup`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertysecuritygroup) | `string` | The SecurityGroup's GroupName, not the GroupId. |
| [`spotPrice`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyspotprice) | `number` | The amazonec2-spot-price parameter. |
| [`subnetId`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertysubnetid) | `string` | *No description.* |
| [`usePrivateAddress`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyuseprivateaddress) | `boolean` | *No description.* |
| [`vpcId`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyvpcid) | `string` | *No description.* |
| [`zone`](#pepperizecdkautoscalinggitlabrunnermachineoptionspropertyzone) | `string` | Extract the availabilityZone last character for the needs of gitlab configuration. |

---

##### `ami`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.ami" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyami"></a>

```typescript
public readonly ami: string;
```

- *Type:* `string`

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.blockDurationMinutes" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyblockdurationminutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* `number`

The amazonec2-block-duration-minutes parameter.

AWS spot instance duration in minutes (60, 120, 180, 240, 300, or 360).

> https://docs.gitlab.com/runner/configuration/runner_autoscale_aws/#cutting-down-costs-with-amazon-ec2-spot-instances

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.iamInstanceProfile" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyiaminstanceprofile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.instanceType" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyinstancetype"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.region" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `requestSpotInstance`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.requestSpotInstance" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyrequestspotinstance"></a>

```typescript
public readonly requestSpotInstance: boolean;
```

- *Type:* `boolean`
- *Default:* true

The amazonec2-request-spot-instance parameter.

Whether or not to request spot instances.

> https://aws.amazon.com/ec2/spot/

---

##### `securityGroup`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.securityGroup" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertysecuritygroup"></a>

```typescript
public readonly securityGroup: string;
```

- *Type:* `string`

The SecurityGroup's GroupName, not the GroupId.

---

##### `spotPrice`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.spotPrice" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyspotprice"></a>

```typescript
public readonly spotPrice: number;
```

- *Type:* `number`
- *Default:* 0.03

The amazonec2-spot-price parameter.

The bidding price for spot instances.

> https://aws.amazon.com/ec2/spot/pricing/

---

##### `subnetId`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.subnetId" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertysubnetid"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* `string`

---

##### `usePrivateAddress`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.usePrivateAddress" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyuseprivateaddress"></a>

```typescript
public readonly usePrivateAddress: boolean;
```

- *Type:* `boolean`

---

##### `vpcId`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.vpcId" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyvpcid"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* `string`

---

##### `zone`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.MachineOptions.property.zone" id="pepperizecdkautoscalinggitlabrunnermachineoptionspropertyzone"></a>

```typescript
public readonly zone: string;
```

- *Type:* `string`

Extract the availabilityZone last character for the needs of gitlab configuration.

> https://docs.gitlab.com/runners/configuration/runners_autoscale_aws/#the-runnerssmachine-section

---

### NetworkProps <a name="@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps" id="pepperizecdkautoscalinggitlabrunnernetworkprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NetworkProps } from '@pepperize/cdk-autoscaling-gitlab-runner'

const networkProps: NetworkProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`subnetSelection`](#pepperizecdkautoscalinggitlabrunnernetworkpropspropertysubnetselection) | [`@aws-cdk/aws-ec2.SubnetSelection`](#@aws-cdk/aws-ec2.SubnetSelection) | The GitLab Runner's subnets. |
| [`vpc`](#pepperizecdkautoscalinggitlabrunnernetworkpropspropertyvpc) | [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc) | If no existing VPC is provided, a default Vpc will be created. |

---

##### `subnetSelection`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps.property.subnetSelection" id="pepperizecdkautoscalinggitlabrunnernetworkpropspropertysubnetselection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* [`@aws-cdk/aws-ec2.SubnetSelection`](#@aws-cdk/aws-ec2.SubnetSelection)

The GitLab Runner's subnets.

It should be either public or private. If more then subnet is selected, then the first found (private) subnet will be used.

> https://docs.aws.amazon.com/cdk/api/latest/docs/

---

##### `vpc`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.NetworkProps.property.vpc" id="pepperizecdkautoscalinggitlabrunnernetworkpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

If no existing VPC is provided, a default Vpc will be created.

---

### RunnerConfiguration <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration" id="pepperizecdkautoscalinggitlabrunnerrunnerconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RunnerConfiguration } from '@pepperize/cdk-autoscaling-gitlab-runner'

const runnerConfiguration: RunnerConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`buildsDir`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertybuildsdir) | `string` | Absolute path to a directory where builds are stored in the context of the selected executor. |
| [`cacheDir`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertycachedir) | `string` | Absolute path to a directory where build caches are stored in context of selected executor. |
| [`cloneUrl`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertycloneurl) | `string` | Overwrite the URL for the GitLab instance. |
| [`debugTraceDisabled`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertydebugtracedisabled) | `boolean` | Disables the CI_DEBUG_TRACE feature. |
| [`environment`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyenvironment) | `string`[] | Append or overwrite environment variables. |
| [`executor`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyexecutor) | `string` | Select how a project should be built. |
| [`limit`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertylimit) | `number` | Limit how many jobs can be handled concurrently by this registered runner. |
| [`name`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyname) | `string` | The runner’s description. |
| [`outputLimit`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyoutputlimit) | `number` | Maximum build log size in kilobytes. |
| [`postBuildScript`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertypostbuildscript) | `string` | Commands to be executed on the runner just after executing the build, but before executing after_script. |
| [`preBuildScript`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyprebuildscript) | `string` | Commands to be executed on the runner after cloning the Git repository, but before executing the build. |
| [`preCloneScript`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertypreclonescript) | `string` | Commands to be executed on the runner before cloning the Git repository. |
| [`referees`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyreferees) | `string` | Extra job monitoring workers that pass their results as job artifacts to GitLab. |
| [`requestConcurrency`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyrequestconcurrency) | `number` | Limit number of concurrent requests for new jobs from GitLab. |
| [`shell`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyshell) | `string` | Name of shell to generate the script. |
| [`tlsCaFile`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertytlscafile) | `string` | When using HTTPS, file that contains the certificates to verify the peer. |
| [`tlsCertFile`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertytlscertfile) | `string` | When using HTTPS, file that contains the certificate to authenticate with the peer. |
| [`tlsKeyFile`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertytlskeyfile) | `string` | When using HTTPS, file that contains the private key to authenticate with the peer. |
| [`token`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertytoken) | `string` | The runner’s authentication token, which is obtained during runner registration. |
| [`url`](#pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyurl) | `string` | GitLab instance URL. |

---

##### `buildsDir`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.buildsDir" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertybuildsdir"></a>

```typescript
public readonly buildsDir: string;
```

- *Type:* `string`

Absolute path to a directory where builds are stored in the context of the selected executor.

For example, locally, Docker, or SSH.

---

##### `cacheDir`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.cacheDir" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertycachedir"></a>

```typescript
public readonly cacheDir: string;
```

- *Type:* `string`

Absolute path to a directory where build caches are stored in context of selected executor.

For example, locally, Docker, or SSH. If the docker executor is used, this directory needs to be included in its volumes parameter.

---

##### `cloneUrl`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.cloneUrl" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertycloneurl"></a>

```typescript
public readonly cloneUrl: string;
```

- *Type:* `string`

Overwrite the URL for the GitLab instance.

Used only if the runner can’t connect to the GitLab URL.

---

##### `debugTraceDisabled`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.debugTraceDisabled" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertydebugtracedisabled"></a>

```typescript
public readonly debugTraceDisabled: boolean;
```

- *Type:* `boolean`

Disables the CI_DEBUG_TRACE feature.

When set to true, then debug log (trace) remains disabled, even if CI_DEBUG_TRACE is set to true by the user.

---

##### `environment`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.environment" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyenvironment"></a>

```typescript
public readonly environment: string[];
```

- *Type:* `string`[]
- *Default:* ["DOCKER_DRIVER=overlay2", "DOCKER_TLS_CERTDIR=/certs"]

Append or overwrite environment variables.

---

##### `executor`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.executor" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyexecutor"></a>

```typescript
public readonly executor: string;
```

- *Type:* `string`
- *Default:* "docker+machine"

Select how a project should be built.

---

##### `limit`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.limit" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertylimit"></a>

```typescript
public readonly limit: number;
```

- *Type:* `number`
- *Default:* 10

Limit how many jobs can be handled concurrently by this registered runner.

0 (default) means do not limit.

---

##### `name`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.name" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* "gitlab-runner"

The runner’s description.

Informational only.

---

##### `outputLimit`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.outputLimit" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyoutputlimit"></a>

```typescript
public readonly outputLimit: number;
```

- *Type:* `number`
- *Default:* 52428800 (50GB)

Maximum build log size in kilobytes.

Default is 4096 (4MB).

---

##### `postBuildScript`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.postBuildScript" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertypostbuildscript"></a>

```typescript
public readonly postBuildScript: string;
```

- *Type:* `string`

Commands to be executed on the runner just after executing the build, but before executing after_script.

To insert multiple commands, use a (triple-quoted) multi-line string or \n character.

---

##### `preBuildScript`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.preBuildScript" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyprebuildscript"></a>

```typescript
public readonly preBuildScript: string;
```

- *Type:* `string`

Commands to be executed on the runner after cloning the Git repository, but before executing the build.

To insert multiple commands, use a (triple-quoted) multi-line string or \n character.

---

##### `preCloneScript`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.preCloneScript" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertypreclonescript"></a>

```typescript
public readonly preCloneScript: string;
```

- *Type:* `string`

Commands to be executed on the runner before cloning the Git repository.

Use it to adjust the Git client configuration first, for example. To insert multiple commands, use a (triple-quoted) multi-line string or \n character.

---

##### `referees`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.referees" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyreferees"></a>

```typescript
public readonly referees: string;
```

- *Type:* `string`

Extra job monitoring workers that pass their results as job artifacts to GitLab.

---

##### `requestConcurrency`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.requestConcurrency" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyrequestconcurrency"></a>

```typescript
public readonly requestConcurrency: number;
```

- *Type:* `number`

Limit number of concurrent requests for new jobs from GitLab.

Default is 1.

---

##### `shell`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.shell" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyshell"></a>

```typescript
public readonly shell: string;
```

- *Type:* `string`

Name of shell to generate the script.

Default value is platform dependent.

---

##### `tlsCaFile`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.tlsCaFile" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertytlscafile"></a>

```typescript
public readonly tlsCaFile: string;
```

- *Type:* `string`

When using HTTPS, file that contains the certificates to verify the peer.

See Self-signed certificates or custom Certification Authorities documentation.

---

##### `tlsCertFile`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.tlsCertFile" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertytlscertfile"></a>

```typescript
public readonly tlsCertFile: string;
```

- *Type:* `string`

When using HTTPS, file that contains the certificate to authenticate with the peer.

---

##### `tlsKeyFile`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.tlsKeyFile" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertytlskeyfile"></a>

```typescript
public readonly tlsKeyFile: string;
```

- *Type:* `string`

When using HTTPS, file that contains the private key to authenticate with the peer.

---

##### `token`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.token" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertytoken"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

The runner’s authentication token, which is obtained during runner registration.

Not the same as the registration token.

---

##### `url`<sup>Optional</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.RunnerConfiguration.property.url" id="pepperizecdkautoscalinggitlabrunnerrunnerconfigurationpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`
- *Default:* "https://gitlab.com"

GitLab instance URL.

---

## Classes <a name="Classes" id="classes"></a>

### ConfigurationMapper <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapper" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapper"></a>

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`toToml`](#pepperizecdkautoscalinggitlabrunnerconfigurationmappertotoml) | *No description.* |

---

##### `toToml` <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapper.toToml" id="pepperizecdkautoscalinggitlabrunnerconfigurationmappertotoml"></a>

```typescript
public toToml()
```

#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`fromProps`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperfromprops) | *No description.* |
| [`withDefaults`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperwithdefaults) | *No description.* |

---

##### `fromProps` <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapper.fromProps" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperfromprops"></a>

```typescript
import { ConfigurationMapper } from '@pepperize/cdk-autoscaling-gitlab-runner'

ConfigurationMapper.fromProps(props: ConfigurationMapperProps)
```

###### `props`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapper.parameter.props" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperparameterprops"></a>

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps`](#@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps)

---

##### `withDefaults` <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapper.withDefaults" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperwithdefaults"></a>

```typescript
import { ConfigurationMapper } from '@pepperize/cdk-autoscaling-gitlab-runner'

ConfigurationMapper.withDefaults(props: ConfigurationMapperProps)
```

###### `props`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapper.parameter.props" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperparameterprops"></a>

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps`](#@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps)

---

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropertyprops)<span title="Required">*</span> | [`@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps`](#@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps) | *No description.* |

---

##### `props`<sup>Required</sup> <a name="@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapper.property.props" id="pepperizecdkautoscalinggitlabrunnerconfigurationmapperpropertyprops"></a>

```typescript
public readonly props: ConfigurationMapperProps;
```

- *Type:* [`@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps`](#@pepperize/cdk-autoscaling-gitlab-runner.ConfigurationMapperProps)

---


