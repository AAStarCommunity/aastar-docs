> `const` **DEFAULT\_CREDENTIAL\_ID**: `"dGVzdC1jcmVkZW50aWFs"` = `"dGVzdC1jcmVkZW50aWFs"`

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:41](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/services/webauthn-ceremony.ts#L41)

Placeholder credential id (base64url of "test-credential") matching the
reference ceremony fixtures. Production callers SHOULD pass the credential id
returned by CompleteRegistration for the registered passkey.
