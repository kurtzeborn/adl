import { Url } from '../common/uri';
import { VendorExtensions } from '../common/vendor-extensions';
import { Dictionary } from '../common/dictionary';

/**
 * Allows the definition of a security scheme that can be used by the operations. Supported schemes are basic authentication, an API key (either as a header or as a query parameter) and OAuth2's common flows (implicit, password, application and access code).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-scheme-object
 */
export interface SecuritySchemeBase extends VendorExtensions {
  /**  The type of the security scheme. Valid values are "basic", "apiKey" or "oauth2". */
  type: 'basic' | 'apiKey' | 'oauth2';

  /** A short description for security scheme. */
  description?: string;
}

/** Basic Auth Security Scheme */
export interface BasicAuthenticationSecurityScheme extends SecuritySchemeBase {

}

/** ApiKey Security Scheme */
export interface ApiKeySecurityScheme extends SecuritySchemeBase {
  /** ApiKey  */
  type: 'apiKey';
  /**
 * The name of the header or query parameter to be used.
 */
  name: string;

  /** The location of the API key. Valid values are "query" or "header". */
  'in': 'query' | 'header';
}

interface OAuthSecuirtyBase extends SecuritySchemeBase {
  /** The flow used by the OAuth2 security scheme */
  flow: string;
}

/** OAuth2 Implicit Security Scheme */
export interface OAuth2ImplicitSecurityScheme extends OAuthSecuirtyBase {

  /** The authorization URL to be used for this flow. This MUST be in the form of a URL. */
  authorizationUrl: Url;
}

/** OAuth2 Password Security Scheme */
export interface OAuth2PasswordSecurityScheme extends OAuthSecuirtyBase {
  /** The token URL to be used for this flow. This MUST be in the form of a URL. */
  tokenUrl: Url;

  /** The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. */
  scopes?: Array<OAuthScope>;
}

/** OAuth2 Application Security Scheme */
export interface OAuth2ApplicationSecurityScheme extends OAuthSecuirtyBase {
  /** The token URL to be used for this flow. This MUST be in the form of a URL. */
  tokenUrl: Url;

  /** The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. */
  scopes?: Array<OAuthScope>;
}

/** OAuth2 Security Code Security Scheme */
export interface OAuth2AccessCodeSecurityScheme extends OAuthSecuirtyBase {
  /** The authorization URL to be used for this flow. This MUST be in the form of a URL. */
  authorizationUrl: Url;

  /** The token URL to be used for this flow. This MUST be in the form of a URL. */
  tokenUrl: Url;

  /** The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. */
  scopes: Dictionary<string>;
}

/** OAuth2 Scope */
export interface OAuthScope {
  /** The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. */
  scopes: Dictionary<string>;
}

/** 
 * Allows the definition of a security scheme that can be used by the operations. Supported schemes are basic authentication, an API key (either as a header or as a query parameter) and OAuth2's common flows (implicit, password, application and access code).
 * 
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-scheme-object
 */
export type SecurityScheme =
  BasicAuthenticationSecurityScheme |
  OAuth2AccessCodeSecurityScheme |
  OAuth2ApplicationSecurityScheme |
  OAuth2ImplicitSecurityScheme |
  OAuth2PasswordSecurityScheme |
  ApiKeySecurityScheme;
