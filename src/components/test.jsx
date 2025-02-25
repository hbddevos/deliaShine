
export default function Component() {
  return (
    <>
      <div
        className="container container--small"
        style={{
          boxSizing: "border-box",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1012px",
        }}
      >
        <div
          className="section-header section-header--pricing"
          style={{
            boxSizing: "border-box",
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "80px",
            display: "flex",
          }}
        >
          <h1
            className="section-heading text-gradient-light cc-pricing"
            style={{
              boxSizing: "border-box",
              margin: "0.67em 0px",
              marginTop: "0px",
              fontWeight: 500,
              WebkitTextFillColor: "transparent",
              backgroundImage:
                "linear-gradient(45deg, rgb(161, 99, 241), rgb(99, 99, 241) 34%, rgb(52, 152, 234) 60%, rgb(64, 223, 163))",
              backgroundClip: "text",
              letterSpacing: "-0.05em",
              marginBottom: "0px",
              fontSize: "52px",
              maxWidth: "700px",
              paddingBottom: "3px",
              paddingLeft: "1px",
              paddingRight: "1px",
              lineHeight: 1.1,
            }}
          >
            Transparent and scalable pricing. Guaranteed.
          </h1>
          <p
            className="section-paragraph"
            style={{
              boxSizing: "border-box",
              marginBottom: "0px",
              color: "#656b8a",
              letterSpacing: "-0.01em",
              marginTop: "16px",
              fontSize: "19px",
              fontStyle: "normal",
              lineHeight: 1.6,
            }}
          >
            Automatic volume discounts that grow with your enterprise
            connections.
          </p>
          <div
            className="cta-wrap cc-margin-top cc-pricing"
            style={{
              boxSizing: "border-box",
              alignItems: "center",
              marginTop: "26px",
              gap: "24px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr 1fr",
              gridAutoColumns: "1fr",
              width: "454px",
              display: "grid",
            }}
          >
            <a
              className="button cc-pricing w-inline-block"
              href="https://workos.com/signup"
              role="button"
              style={{
                boxSizing: "border-box",
                textDecoration: "inherit",
                fontSize: "inherit",
                textUnderlineOffset: "2px",
                maxWidth: "100%",
                display: "inline-block",
                borderRadius: "100px",
                padding: "12px 24px",
                transition: "background-color 0.2s",
                backgroundColor: "#6363f1",
                color: "rgb(255, 255, 255)",
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
                marginTop: "0px",
                fontWeight: 500,
                userSelect: "none",
                boxShadow:
                  "rgba(23, 6, 100, 0.037) 0px 24px 22px, rgba(23, 6, 100, 0.053) 0px 8.5846px 8.03036px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px, rgba(23, 6, 100, 0.083) 0px 2.63479px 1.91116px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px",
              }}
            >
              <div style={{ boxSizing: "border-box" }}>
                Get started{" "}
                <span
                  className="hidden-on-mobile"
                  style={{ boxSizing: "border-box" }}
                >
                  today
                </span>
              </div>
            </a>
            <a
              className="secondary-button cc-bold cc-no-icon cc-pricing w-inline-block"
              href="https://workos.com/contact"
              style={{
                boxSizing: "border-box",
                backgroundColor: "rgba(0, 0, 0, 0)",
                textDecoration: "inherit",
                textUnderlineOffset: "2px",
                maxWidth: "100%",
                border: "1px solid #e8eaed",
                whiteSpace: "nowrap",
                borderRadius: "100px",
                padding: "12px 18px 12px 22px",
                color: "#6363f1",
                alignItems: "center",
                lineHeight: 1.2,
                display: "flex",
                borderStyle: "none",
                transition: "box-shadow 0.2s, border-color 0.2s",
                boxShadow: "inset 0 0 0 1px #e8eaed",
                justifyContent: "center",
                fontWeight: 500,
                paddingLeft: "24px",
                paddingRight: "24px",
                fontSize: "16px",
              }}
            >
              <div style={{ boxSizing: "border-box" }}>Contact sales</div>
            </a>
          </div>
          <div
            className="cta-notice cc-pricing"
            style={{
              boxSizing: "border-box",
              color: "#8f96bd",
              marginTop: "12px",
              fontSize: "14px",
            }}
          >
            No credit card required for a fully-featured sandbox environment
          </div>
        </div>
        <div
          className="tile cc-pricing u-negative-m-mobile"
          style={{
            boxSizing: "border-box",
            overflow: "hidden",
            backgroundColor: "rgb(255, 255, 255)",
            display: "block",
            boxShadow:
              "rgba(17, 7, 53, 0.05) 0px 51px 78px, rgba(17, 7, 53, 0.036) 0px 21.3066px 35.4944px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px, rgba(17, 7, 53, 0.025) 0px 6.38599px 9.8801px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px, rgba(17, 7, 53, 0.014) 0px 1.4113px 1.55262px, rgba(41, 56, 78, 0.05) 0px 1px 0px inset",
            borderRadius: "32px",
          }}
        >
          <div
            className="pricing-overview-row"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #e8eaed",
              padding: "48px",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="flex-h cc-center cc-pricing-overview"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="feature-grid-icon cc-overview"
                height={61}
                width={60}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/656545520bd5f04e20a3a6a7_um.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "60px",
                  minWidth: "60px",
                  marginRight: "24px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h2
                  className="small-headline"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "-0.03em",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "30px",
                  }}
                >
                  AuthKit
                </h2>
                <p
                  className="pricing-overview-description text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    marginTop: "3px",
                  }}
                >
                  User management with social auth, MFA, RBAC, and more
                </p>
              </div>
            </div>
            <div
              className="pricing-overview-right"
              style={{
                boxSizing: "border-box",
                minWidth: "200px",
                marginLeft: "28px",
              }}
            >
              <div
                className="allcaps-label"
                style={{
                  boxSizing: "border-box",
                  color: "#8f96bd",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Up to 1 million users
              </div>
              <div
                className="pricing-overview-price-wrap"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  marginTop: "3px",
                  marginBottom: "1px",
                  display: "flex",
                }}
              >
                <div
                  className="large-headline text-gradient-light"
                  style={{
                    boxSizing: "border-box",
                    WebkitTextFillColor: "transparent",
                    backgroundImage:
                      "linear-gradient(45deg, rgb(161, 99, 241), rgb(99, 99, 241) 34%, rgb(52, 152, 234) 60%, rgb(64, 223, 163))",
                    backgroundClip: "text",
                    letterSpacing: "-0.04em",
                    fontSize: "32px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  Free
                </div>
              </div>
              <a
                className="pricing-overview-link w-inline-block"
                href="https://workos.com/pricing#"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  textDecoration: "inherit",
                  textUnderlineOffset: "2px",
                  maxWidth: "100%",
                  gap: "6px",
                  color: "#6363f1",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                <div style={{ boxSizing: "border-box" }}>
                  View pricing details
                </div>
              </a>
            </div>
          </div>
          <div
            className="pricing-overview-row"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #e8eaed",
              padding: "48px",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="flex-h cc-center cc-pricing-overview"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="feature-grid-icon cc-overview"
                height={61}
                width={60}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e25132eb2edc6109054a14_icon-admin-portal.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "60px",
                  minWidth: "60px",
                  marginRight: "24px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h2
                  className="small-headline"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "-0.03em",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "30px",
                  }}
                >
                  Custom domains
                </h2>
                <p
                  className="pricing-overview-description text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    marginTop: "3px",
                  }}
                >
                  Customize AuthKit, Admin Portal, and all transactional email
                  domains
                </p>
              </div>
            </div>
            <div
              className="pricing-overview-right"
              style={{
                boxSizing: "border-box",
                minWidth: "200px",
                marginLeft: "28px",
              }}
            >
              <div
                className="allcaps-label"
                style={{
                  boxSizing: "border-box",
                  color: "#8f96bd",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                FLAT RATE
              </div>
              <div
                className="pricing-overview-price-wrap"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  marginTop: "3px",
                  marginBottom: "1px",
                  display: "flex",
                }}
              >
                <div
                  className="pricing-dollar-sign"
                  style={{
                    boxSizing: "border-box",
                    alignSelf: "flex-start",
                    marginRight: "3px",
                    fontSize: "20px",
                    position: "relative",
                    top: "3px",
                  }}
                >
                  $
                </div>
                <div
                  className="large-headline"
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "-0.04em",
                    fontSize: "32px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  99
                </div>
                <div
                  className="pricing-overview-notice"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    marginLeft: "8px",
                    fontSize: "14px",
                  }}
                >
                  / month
                </div>
              </div>
              <a
                className="pricing-overview-link"
                href="https://workos.com/pricing#"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  textDecoration: "inherit",
                  textUnderlineOffset: "2px",
                  gap: "6px",
                  color: "#6363f1",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                Customization options
              </a>
            </div>
          </div>
          <div
            className="pricing-overview-row"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #e8eaed",
              padding: "48px",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="flex-h cc-center cc-pricing-overview"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="feature-grid-icon cc-overview"
                height={61}
                width={60}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e251327a19713a5ce17b54_icon-sso.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "60px",
                  minWidth: "60px",
                  marginRight: "24px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h2
                  className="small-headline"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "-0.03em",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "30px",
                  }}
                >
                  Single Sign-On
                </h2>
                <p
                  className="pricing-overview-description text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    marginTop: "3px",
                  }}
                >
                  Enterprise SAML & OIDC authentication with any
                  identity provider
                </p>
              </div>
            </div>
            <div
              className="pricing-overview-right"
              style={{
                boxSizing: "border-box",
                minWidth: "200px",
                marginLeft: "28px",
              }}
            >
              <div
                className="allcaps-label"
                style={{
                  boxSizing: "border-box",
                  color: "#8f96bd",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                UNLIMITED users
              </div>
              <div
                className="pricing-overview-price-wrap"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  marginTop: "3px",
                  marginBottom: "1px",
                  display: "flex",
                }}
              >
                <div
                  className="pricing-dollar-sign"
                  style={{
                    boxSizing: "border-box",
                    alignSelf: "flex-start",
                    marginRight: "3px",
                    fontSize: "20px",
                    position: "relative",
                    top: "3px",
                  }}
                >
                  $
                </div>
                <div
                  className="large-headline"
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "-0.04em",
                    fontSize: "32px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  125
                </div>
                <div
                  className="pricing-overview-notice"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    marginLeft: "8px",
                    fontSize: "14px",
                  }}
                >
                  per connection
                  <br style={{ boxSizing: "border-box" }} />/ month
                </div>
              </div>
              <a
                className="pricing-overview-link"
                href="https://workos.com/pricing#"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  textDecoration: "inherit",
                  textUnderlineOffset: "2px",
                  gap: "6px",
                  color: "#6363f1",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                Automatic volume discounts
              </a>
            </div>
          </div>
          <div
            className="pricing-overview-row"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #e8eaed",
              padding: "48px",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="flex-h cc-center cc-pricing-overview"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="feature-grid-icon cc-overview"
                height={61}
                width={60}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e25131f3a3e325c8ddb04c_icon-directory-sync.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "60px",
                  minWidth: "60px",
                  marginRight: "24px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h2
                  className="small-headline"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "-0.03em",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "30px",
                  }}
                >
                  Directory Sync
                </h2>
                <p
                  className="pricing-overview-description text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    marginTop: "3px",
                  }}
                >
                  Automatic SCIM user provisioning, de-provisioning,
                  & role mapping
                </p>
              </div>
            </div>
            <div
              className="pricing-overview-right"
              style={{
                boxSizing: "border-box",
                minWidth: "200px",
                marginLeft: "28px",
              }}
            >
              <div
                className="allcaps-label"
                style={{
                  boxSizing: "border-box",
                  color: "#8f96bd",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                UNLIMITED users
              </div>
              <div
                className="pricing-overview-price-wrap"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  marginTop: "3px",
                  marginBottom: "1px",
                  display: "flex",
                }}
              >
                <div
                  className="pricing-dollar-sign"
                  style={{
                    boxSizing: "border-box",
                    alignSelf: "flex-start",
                    marginRight: "3px",
                    fontSize: "20px",
                    position: "relative",
                    top: "3px",
                  }}
                >
                  $
                </div>
                <div
                  className="large-headline"
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "-0.04em",
                    fontSize: "32px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  125
                </div>
                <div
                  className="pricing-overview-notice"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    marginLeft: "8px",
                    fontSize: "14px",
                  }}
                >
                  per connection
                  <br style={{ boxSizing: "border-box" }} />/ month
                </div>
              </div>
              <a
                className="pricing-overview-link"
                href="https://workos.com/pricing#"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  textDecoration: "inherit",
                  textUnderlineOffset: "2px",
                  gap: "6px",
                  color: "#6363f1",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                Automatic volume discounts
              </a>
            </div>
          </div>
          <div
            className="pricing-overview-row"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #e8eaed",
              padding: "48px",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="flex-h cc-center cc-pricing-overview"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="feature-grid-icon cc-overview"
                height={61}
                width={60}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/673d957d4f786c436e8a8162_icon-fga-pricing.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "60px",
                  minWidth: "60px",
                  marginRight: "24px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h2
                  className="small-headline"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "-0.03em",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "30px",
                  }}
                >
                  Fine-Grained Authorization
                </h2>
                <p
                  className="pricing-overview-description text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    marginTop: "3px",
                  }}
                >
                  Decoupled authorization logic, simple schema language,{" "}
                  <br style={{ boxSizing: "border-box" }} />& fast runtime APIs
                </p>
              </div>
            </div>
            <div
              className="pricing-overview-right"
              style={{
                boxSizing: "border-box",
                minWidth: "200px",
                marginLeft: "28px",
              }}
            >
              <div
                className="allcaps-label"
                style={{
                  boxSizing: "border-box",
                  color: "#8f96bd",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Get started for
              </div>
              <div
                className="pricing-overview-price-wrap"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  marginTop: "3px",
                  marginBottom: "1px",
                  display: "flex",
                }}
              >
                <div
                  className="large-headline text-gradient-light"
                  style={{
                    boxSizing: "border-box",
                    WebkitTextFillColor: "transparent",
                    backgroundImage:
                      "linear-gradient(45deg, rgb(161, 99, 241), rgb(99, 99, 241) 34%, rgb(52, 152, 234) 60%, rgb(64, 223, 163))",
                    backgroundClip: "text",
                    letterSpacing: "-0.04em",
                    fontSize: "32px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  Free
                </div>
              </div>
              <a
                className="pricing-overview-link w-inline-block"
                href="https://workos.com/pricing#"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  textDecoration: "inherit",
                  textUnderlineOffset: "2px",
                  maxWidth: "100%",
                  gap: "6px",
                  color: "#6363f1",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                <div style={{ boxSizing: "border-box" }}>
                  View pricing details
                </div>
              </a>
            </div>
          </div>
          <div
            className="pricing-overview-row"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #e8eaed",
              padding: "48px",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="flex-h cc-center cc-pricing-overview"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="feature-grid-icon cc-overview"
                height={61}
                width={60}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e25131962bf19bc0301dcf_icon-audit-logs.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "60px",
                  minWidth: "60px",
                  marginRight: "24px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h2
                  className="small-headline"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    letterSpacing: "-0.03em",
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "30px",
                  }}
                >
                  Audit Logs
                </h2>
                <p
                  className="pricing-overview-description text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    marginTop: "3px",
                  }}
                >
                  SIEM capture and event export from your app
                </p>
              </div>
            </div>
            <div
              className="pricing-overview-right"
              style={{
                boxSizing: "border-box",
                minWidth: "200px",
                marginLeft: "28px",
              }}
            >
              <div
                className="allcaps-label"
                style={{
                  boxSizing: "border-box",
                  color: "#8f96bd",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                STARTS AT
              </div>
              <div
                className="pricing-overview-price-wrap"
                style={{
                  boxSizing: "border-box",
                  alignItems: "center",
                  marginTop: "3px",
                  marginBottom: "1px",
                  display: "flex",
                }}
              >
                <div
                  className="pricing-dollar-sign"
                  style={{
                    boxSizing: "border-box",
                    alignSelf: "flex-start",
                    marginRight: "3px",
                    fontSize: "20px",
                    position: "relative",
                    top: "3px",
                  }}
                >
                  $
                </div>
                <div
                  className="large-headline"
                  style={{
                    boxSizing: "border-box",
                    letterSpacing: "-0.04em",
                    fontSize: "32px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  5
                </div>
                <div
                  className="pricing-overview-notice"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    marginLeft: "8px",
                    fontSize: "14px",
                  }}
                >
                  per organization
                  <br style={{ boxSizing: "border-box" }} />/ month
                </div>
              </div>
              <a
                className="pricing-overview-link"
                href="https://workos.com/pricing#"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  textDecoration: "inherit",
                  textUnderlineOffset: "2px",
                  gap: "6px",
                  color: "#6363f1",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                View available add-ons
              </a>
            </div>
          </div>
          <div
            className="pricing-overview-row pricing-overview-row--bottom"
            style={{
              boxSizing: "border-box",
              borderBottom: "1px solid #e8eaed",
              padding: "48px",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              borderBottomStyle: "none",
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingRight: "24px",
            }}
          >
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ boxSizing: "border-box" }}>
                <strong
                  className="u-weight-500"
                  style={{ boxSizing: "border-box", fontWeight: 500 }}
                >
                  How much will WorkOS cost you?
                </strong>{" "}
                 
                <span
                  className="text-color-light-2"
                  style={{ boxSizing: "border-box", color: "#656b8a" }}
                >
                  Quickly calculate your estimated costs + discounts
                </span>
              </div>
            </div>
            <div
              className="pricing-overview-right"
              style={{
                boxSizing: "border-box",
                minWidth: "200px",
                marginLeft: "28px",
              }}
            >
              <a
                id="estimate-button"
                className="rainbow-button w-inline-block"
                href="https://workos.com/pricing#"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  textDecoration: "inherit",
                  color: "inherit",
                  fontSize: "inherit",
                  textUnderlineOffset: "2px",
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                  borderRadius: "100px",
                  padding: "1px",
                  textAlign: "center",
                  backgroundImage:
                    "linear-gradient(40deg, rgb(161, 99, 241), rgb(99, 99, 241) 33%, rgb(52, 152, 234) 66%, rgb(64, 223, 163))",
                  fontWeight: 500,
                  display: "block",
                }}
              >
                <div
                  className="rainbow-button-inner"
                  style={{
                    boxSizing: "border-box",
                    borderRadius: "100px",
                    padding: "12px 32px",
                    transition: "background-color 0.2s",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  <div
                    className="text-gradient-light"
                    style={{
                      boxSizing: "border-box",
                      WebkitTextFillColor: "transparent",
                      backgroundImage:
                        "linear-gradient(45deg, rgb(161, 99, 241), rgb(99, 99, 241) 34%, rgb(52, 152, 234) 60%, rgb(64, 223, 163))",
                      backgroundClip: "text",
                    }}
                  >
                    Estimate your bill
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="pricing-logos-wrap"
          style={{
            boxSizing: "border-box",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <div
            className="allcaps-label text-centered"
            style={{
              boxSizing: "border-box",
              color: "#8f96bd",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Trusted by
          </div>
          <div className="w-dyn-list" style={{ boxSizing: "border-box" }}>
            <div
              className="home-hero-logo-grid home-hero-logo-grid--pricing cc-new w-dyn-items"
              role="list"
              style={{
                boxSizing: "border-box",
                gap: "30px 16px",
                gridTemplateRows: "auto auto",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                gridAutoColumns: "1fr",
                alignItems: "center",
                display: "grid",
                columnGap: "80px",
                marginTop: "32px",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/67afb0e90cb9f27876b59fd3_cursor.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/654d2a5fe4d1c7acb1736f92_webflow-logo-legacy.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/623c46425a2fed50f082784f_Vercel.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/64d137bd0daa139861518887_indeed.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/64d1390fda5bf453d0d27622_modern-treasury.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/624f749e9d9e9159d574ff0c_drata.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/64d13b345df749fd1daaf2fa_jasper.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/624f7089b0d727a5a63bc876_loom.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/64d13549e9b1bd4ac76a2e8d_plaid.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
              <div
                className="w-dyn-item"
                role="listitem"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  className="home-hero-logo-img"
                  src="https://cdn.prod.website-files.com/621f84dc15b5ed16dc85a18a/6633ce599575c9444de7b3ed_perplexity-logo.svg"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="pricing-included-wrap u-negative-m-mobile"
          style={{
            boxSizing: "border-box",
            border: "1px solid #e8eaed",
            borderRadius: "32px",
            padding: "32px 48px 48px",
            marginTop: "66px",
            marginBottom: "64px",
          }}
        >
          <div
            className="section-header section-header--margin-small"
            style={{
              boxSizing: "border-box",
              textAlign: "center",
              flexDirection: "column",
              alignItems: "center",
              display: "flex",
              marginBottom: "64px",
            }}
          >
            <div
              className="allcaps-label u-mb-3"
              style={{
                boxSizing: "border-box",
                color: "#8f96bd",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: 500,
                marginBottom: "3px",
              }}
            >
              AVAILABLE for ALL ACCOUNTS
            </div>
            <h2
              className="large-headline"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                marginBottom: "0px",
                letterSpacing: "-0.04em",
                fontSize: "32px",
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              Batteries included
            </h2>
          </div>
          <div
            className="_2-col-grid cc-cap margin-top"
            style={{
              boxSizing: "border-box",
              marginTop: "32px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr 1fr",
              gridAutoColumns: "1fr",
              display: "grid",
              gap: "32px",
            }}
          >
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="pricing-included-icon"
                height={44}
                width={44}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/64cd1a29116b6f427911efe0_google-mircosoft-signing.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginRight: "22px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h3
                  className="text-base u-mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  Social Auth
                </h3>
                <p
                  className="text-small text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    fontSize: "14px",
                  }}
                >
                  Authentication with Microsoft, Google, and more
                </p>
              </div>
            </div>
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="pricing-included-icon"
                height={44}
                width={44}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/655233d84c1efee3dcbdc50e_icon-authkit.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginRight: "22px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h3
                  className="text-base u-mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  AuthKit
                </h3>
                <p
                  className="text-small text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    fontSize: "14px",
                  }}
                >
                  Customizable auth UI powered by WorkOS and Radix
                </p>
              </div>
            </div>
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="pricing-included-icon"
                height={44}
                width={44}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/64cd1a29bcc1ade00cb6512a_icon-magic-link.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginRight: "22px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h3
                  className="text-base u-mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  Magic Auth
                </h3>
                <p
                  className="text-small text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    fontSize: "14px",
                  }}
                >
                  Passwordless auth using six digit codes sent via email
                </p>
              </div>
            </div>
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="pricing-included-icon"
                height={44}
                width={44}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/63e25132f3d2d0e80db83c38_icon-mfa.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginRight: "22px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h3
                  className="text-base u-mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  Multi-Factor Auth (MFA)
                </h3>
                <p
                  className="text-small text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    fontSize: "14px",
                  }}
                >
                  Additional authentication with TOTP and SMS
                </p>
              </div>
            </div>
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="pricing-included-icon"
                height={44}
                width={44}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/6560acd599c92e29bce0c506_verified-email-icon.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginRight: "22px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h3
                  className="text-base u-mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  Email verification
                </h3>
                <p
                  className="text-small text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    fontSize: "14px",
                  }}
                >
                  Verify user email addresses with a magic codes
                </p>
              </div>
            </div>
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="pricing-included-icon"
                height={44}
                width={44}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/655233d846732aedef8f2fa4_icon-orgs.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginRight: "22px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h3
                  className="text-base u-mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  Organization auth policies
                </h3>
                <p
                  className="text-small text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    fontSize: "14px",
                  }}
                >
                  Restrict domains, MFA, and SSO per organization
                </p>
              </div>
            </div>
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="pricing-included-icon"
                height={44}
                width={44}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/655233d88677e240f416e0af_icon-user-management.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginRight: "22px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h3
                  className="text-base u-mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  Just-in-time (JIT) user provisioning
                </h3>
                <p
                  className="text-small text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    fontSize: "14px",
                  }}
                >
                  Automatic provisioning based on email or SSO
                </p>
              </div>
            </div>
            <div
              className="flex-h cc-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="pricing-included-icon"
                height={44}
                width={44}
                src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/669f8fc6632ec31e0ed01fe5_icon-rbac.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginRight: "22px",
                }}
              />
              <div style={{ boxSizing: "border-box" }}>
                <h3
                  className="text-base u-mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    fontSize: "16px",
                    lineHeight: 1.2,
                    marginBottom: "3px",
                  }}
                >
                  Role-Based Access Control (RBAC)
                </h3>
                <p
                  className="text-small text-color-light-2"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    lineHeight: 1.5,
                    color: "#656b8a",
                    fontSize: "14px",
                  }}
                >
                  Manage and assign roles and permissions to users
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pricing-custom-wrap u-negative-m-mobile"
          style={{
            boxSizing: "border-box",
            borderRadius: "32px",
            padding: "1px",
            backgroundImage:
              "linear-gradient(45deg, rgba(161, 99, 241, 0.3), rgba(99, 99, 241, 0.3) 30%, rgba(52, 152, 234, 0.3) 63%, rgba(64, 223, 163, 0.3))",
          }}
        >
          <div
            className="pricing-custom-inner"
            style={{
              boxSizing: "border-box",
              borderRadius: "31px",
              backgroundColor: "rgb(255, 255, 255)",
              display: "flex",
            }}
          >
            <div
              className="pricing-custom-cell"
              style={{
                boxSizing: "border-box",
                padding: "50px 80px 50px 48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "50%",
                display: "flex",
              }}
            >
              <h3
                className="eyebrow"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  color: "#6363f1",
                  letterSpacing: "-0.05em",
                  marginBottom: "12px",
                  fontSize: "28px",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Custom Enterprise plans
              </h3>
              <p
                className="section-paragraph section-paragraph--no-margin"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "0px",
                  color: "#656b8a",
                  letterSpacing: "-0.01em",
                  fontSize: "19px",
                  fontStyle: "normal",
                  lineHeight: 1.6,
                  marginTop: "0px",
                }}
              >
                Flexible contract-based plans tailored to your business
                requirements.
              </p>
              <div
                className="margin-top"
                style={{ boxSizing: "border-box", marginTop: "32px" }}
              >
                <a
                  className="secondary-button cc-bold cc-no-icon w-inline-block"
                  href="mailto:sales@workos.com?subject=WorkOS%20Enterprise%20pricing"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    textDecoration: "inherit",
                    textUnderlineOffset: "2px",
                    maxWidth: "100%",
                    border: "1px solid #e8eaed",
                    whiteSpace: "nowrap",
                    borderRadius: "100px",
                    padding: "12px 18px 12px 22px",
                    color: "#6363f1",
                    alignItems: "center",
                    fontSize: "14px",
                    lineHeight: 1.2,
                    display: "flex",
                    borderStyle: "none",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                    boxShadow: "inset 0 0 0 1px #e8eaed",
                    justifyContent: "center",
                    fontWeight: 500,
                    paddingLeft: "24px",
                    paddingRight: "24px",
                  }}
                >
                  <div style={{ boxSizing: "border-box" }}>Contact sales</div>
                </a>
              </div>
            </div>
            <div
              className="pricing-custom-cell pricing-custom-cell--border cc-new"
              style={{
                boxSizing: "border-box",
                padding: "50px 80px 50px 48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "50%",
                display: "flex",
                borderLeft: "1px solid #e8eaed",
                borderLeftColor: "rgb(199, 225, 249)",
                paddingLeft: "80px",
              }}
            >
              <ul
                className="list"
                role="list"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "0px",
                  paddingLeft: "0px",
                  listStyleType: "none",
                }}
              >
                <li
                  className="list-item"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    alignItems: "flex-start",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    display: "flex",
                  }}
                >
                  <div
                    className="list-icon w-embed"
                    style={{
                      boxSizing: "border-box",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "16px",
                      marginRight: "8px",
                      display: "flex",
                      position: "relative",
                      top: "2px",
                    }}
                  >
                    <svg
                      height="16"
                      width="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <path
                        d="M0 8C0 1.412 1.412 0 8 0C14.588 0 16 1.412 16 8C16 14.588 14.588 16 8 16C1.412 16 0 14.588 0 8Z"
                        fill="#D9D9FF"
                        style={{ boxSizing: "border-box" }}
                      />
                      <path
                        d="M4.44446 8.44443L6.66668 10.6666L10.8889 6.44443L11.4984 5.83496"
                        stroke="#6363F1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </div>
                  <div style={{ boxSizing: "border-box" }}>
                    Greater volume discounts
                  </div>
                </li>
                <li
                  className="list-item"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    alignItems: "flex-start",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    display: "flex",
                  }}
                >
                  <div
                    className="list-icon w-embed"
                    style={{
                      boxSizing: "border-box",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "16px",
                      marginRight: "8px",
                      display: "flex",
                      position: "relative",
                      top: "2px",
                    }}
                  >
                    <svg
                      height="16"
                      width="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <path
                        d="M0 8C0 1.412 1.412 0 8 0C14.588 0 16 1.412 16 8C16 14.588 14.588 16 8 16C1.412 16 0 14.588 0 8Z"
                        fill="#D9D9FF"
                        style={{ boxSizing: "border-box" }}
                      />
                      <path
                        d="M4.44446 8.44443L6.66668 10.6666L10.8889 6.44443L11.4984 5.83496"
                        stroke="#6363F1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </div>
                  <div style={{ boxSizing: "border-box" }}>
                    Multi-year custom contracts
                  </div>
                </li>
                <li
                  className="list-item"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    alignItems: "flex-start",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    display: "flex",
                  }}
                >
                  <div
                    className="list-icon w-embed"
                    style={{
                      boxSizing: "border-box",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "16px",
                      marginRight: "8px",
                      display: "flex",
                      position: "relative",
                      top: "2px",
                    }}
                  >
                    <svg
                      height="16"
                      width="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <path
                        d="M0 8C0 1.412 1.412 0 8 0C14.588 0 16 1.412 16 8C16 14.588 14.588 16 8 16C1.412 16 0 14.588 0 8Z"
                        fill="#D9D9FF"
                        style={{ boxSizing: "border-box" }}
                      />
                      <path
                        d="M4.44446 8.44443L6.66668 10.6666L10.8889 6.44443L11.4984 5.83496"
                        stroke="#6363F1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </div>
                  <div style={{ boxSizing: "border-box" }}>
                    Guaranteed support response SLA
                  </div>
                </li>
                <li
                  className="list-item"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    alignItems: "flex-start",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    display: "flex",
                  }}
                >
                  <div
                    className="list-icon w-embed"
                    style={{
                      boxSizing: "border-box",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "16px",
                      marginRight: "8px",
                      display: "flex",
                      position: "relative",
                      top: "2px",
                    }}
                  >
                    <svg
                      height="16"
                      width="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <path
                        d="M0 8C0 1.412 1.412 0 8 0C14.588 0 16 1.412 16 8C16 14.588 14.588 16 8 16C1.412 16 0 14.588 0 8Z"
                        fill="#D9D9FF"
                        style={{ boxSizing: "border-box" }}
                      />
                      <path
                        d="M4.44446 8.44443L6.66668 10.6666L10.8889 6.44443L11.4984 5.83496"
                        stroke="#6363F1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </div>
                  <div style={{ boxSizing: "border-box" }}>
                    Contractual uptime guarantee
                  </div>
                </li>
                <li
                  className="list-item"
                  style={{
                    boxSizing: "border-box",
                    color: "#656b8a",
                    alignItems: "flex-start",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    display: "flex",
                  }}
                >
                  <div
                    className="list-icon w-embed"
                    style={{
                      boxSizing: "border-box",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "16px",
                      marginRight: "8px",
                      display: "flex",
                      position: "relative",
                      top: "2px",
                    }}
                  >
                    <svg
                      height="16"
                      width="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <path
                        d="M0 8C0 1.412 1.412 0 8 0C14.588 0 16 1.412 16 8C16 14.588 14.588 16 8 16C1.412 16 0 14.588 0 8Z"
                        fill="#D9D9FF"
                        style={{ boxSizing: "border-box" }}
                      />
                      <path
                        d="M4.44446 8.44443L6.66668 10.6666L10.8889 6.44443L11.4984 5.83496"
                        stroke="#6363F1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </div>
                  <div style={{ boxSizing: "border-box" }}>
                    Invoice based billing
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  height: 100%;
}

body {
  box-sizing: border-box;
  margin: 0px;
  background-color: rgb(255, 255, 255);
  min-height: 100%;
  color: #29363d;
  font-family: Untitled sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  overflow: auto;
  margin-right: initial;
}
`,
        }}
      />
    </>
  );
}
