> `const` **DEFAULT\_CREDENTIAL\_ID**: `"dGVzdC1jcmVkZW50aWFs"` = `"dGVzdC1jcmVkZW50aWFs"`

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:41](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/airaccount/src/server/services/webauthn-ceremony.ts#L41)

Placeholder credential id (base64url of "test-credential") matching the
reference ceremony fixtures. Production callers SHOULD pass the credential id
returned by CompleteRegistration for the registered passkey.
