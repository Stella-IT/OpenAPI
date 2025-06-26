# Console API <Badge type="warning" text="beta" />

Stella IT의 Console API는 Stella IT가 제공하는 Stella IT Console의 기능을 외부에서 사용할 수 있도록 하는 API입니다.  
이 API를 사용하면 Stella IT Console에서 제공하는 다양한 기능을 프로그래밍적으로 접근하고 사용할 수 있습니다.

::: danger
Console API는 테스트 모드가 제공되지 않으며, 원치 않는 결제나 데이터 손실이 발생할 수 있습니다.  
이 경우, Stella IT는 금전적 손실과 데이터 손실에 대한 책임을 질 수 없습니다.  
API를 사용하기 전 반드시 요청이 올바른지 확인하세요.
:::

## 사용 전 준비 사항

Stella IT Console API를 사용하기 위해서는 다음과 같은 준비가 필요합니다:
- Stella IT Console 계정: API를 사용하기 위해서는 Stella IT Console 계정이 필요합니다.  
  계정이 없다면 [Stella IT Console](https://console.stella-it.cloud)에서 계정을 생성하세요.
- Bearer 키: API를 사용하기 위해서는 https://console.stella-api.dev 스코프가 포함된 Bearer 키가 필요합니다.  
  Bearer 키는 Stella IT Accounts의 OAuth2.0 클라이언트 플로우를 진행하여 발급받을 수 있습니다.