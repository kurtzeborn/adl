import { VendorExtensions } from '../common/vendor-extensions';
import { Dictionary } from '../common/dictionary';
import { Schema, SchemaReference } from './schema';
import { Response, ResponseReference } from './response';
import { ParameterReference, CookieParameter, HeaderParameter, PathParameter, QueryParameter } from './parameters';
import { Example } from './example';
import { JsonReference } from '../common/json-reference';
import { RequestBody } from './request-body';
import { Link } from './link';
import { Callback } from './callback';
import { SecurityScheme } from './security';
import { HeaderReference, Header } from './header';

/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 * 
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#components-object
 */
export interface Components extends VendorExtensions {
  /**
   * An object to hold reusable Schema Objects.
   */
  schemas?: Dictionary<Schema | SchemaReference>;

  /**
   * An object to hold reusable Header Objects.
   */
  headers?: Dictionary<Header | HeaderReference>;

  /**
   * An object to hold reusable Response Objects.
   */
  responses?: Dictionary<Response | ResponseReference>;

  /** 
   * An object to hold reusable Parameter Objects.
   */
  parameters?: Dictionary<ParameterReference | CookieParameter | HeaderParameter | PathParameter | QueryParameter>;

  /** 
   * An object to hold reusable Example Objects.
   */
  examples?: Dictionary<Example | JsonReference<Example>>;

  /**
   * An object to hold reusable Request Body Objects.
   */
  requestBodies?: Dictionary<RequestBody | JsonReference<RequestBody>>;

  /**
   * An object to hold reusable Security Scheme Objects.
   */
  securitySchemes?: Dictionary<SecurityScheme | JsonReference<SecurityScheme>>;

  /**
   * An object to hold reusable Link Objects.
   */
  links?: Dictionary<Link | JsonReference<Link>>;

  /**
   * An object to hold reusable Callback Objects.
   */
  callbacks?: Dictionary<Callback | JsonReference<Callback>>;
}